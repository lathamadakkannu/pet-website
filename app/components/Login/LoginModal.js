"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiCheck,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
  FiX,
} from "react-icons/fi";
import { signInDemoUser } from "../../lib/demoSession";

const fieldMaxLengths = {
  name: 50,
  email: 254,
  password: 64,
};
const fieldLabels = {
  name: "Name",
  email: "Email address",
  password: "Password",
};

function validateField(field, value) {
  const normalizedValue = field === "password" ? value : value.trim();

  if (!normalizedValue) {
    return `${fieldLabels[field]} is required.`;
  }

  if (value.length > fieldMaxLengths[field]) {
    return `Use ${fieldMaxLengths[field]} characters or fewer.`;
  }

  if (
    field === "email" &&
    !/^[^\s@]+@(?:[^\s@.]+\.)+[^\s@.]{2,}$/.test(normalizedValue)
  ) {
    return "Enter a valid email address.";
  }

  return "";
}

function LoginModal({ onClose, onSignedIn }) {
  const router = useRouter();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const [successName, setSuccessName] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !successName) onClose();
    };

    document.body.classList.add("login-modal-open");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("login-modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, successName]);

  useEffect(() => {
    if (!successName) return undefined;

    const redirectTimer = window.setTimeout(() => {
      onSignedIn?.(successName);
      router.push("/pages/Profile");
    }, 1200);

    return () => window.clearTimeout(redirectTimer);
  }, [onSignedIn, router, successName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {
      name: validateField("name", values.name),
      email: validateField("email", values.email),
      password: validateField("password", values.password),
    };
    setErrors(nextErrors);
    setHasSubmitted(true);

    if (Object.values(nextErrors).some(Boolean)) return;

    const name = values.name.trim();
    signInDemoUser(name);
    setSuccessName(name);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));

    if (hasSubmitted || errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, value),
    }));
  };

  return (
    <div
      className="login-modal"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !successName) onClose();
      }}
    >
      <section
        className="login-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        {!successName && (
          <button
            className="login-modal__close"
            type="button"
            onClick={onClose}
            aria-label="Close sign-in"
          >
            <FiX aria-hidden="true" />
          </button>
        )}
        <span className="login-modal__eyebrow">Treasuremount account</span>
        {successName ? (
          <div className="login-modal__success">
            <span className="login-modal__success-icon" aria-hidden="true">
              <FiCheck />
            </span>
            <p id="login-modal-title" role="status" aria-live="polite">
              Successfully signed in.
            </p>
          </div>
        ) : (
          <>
            <h1 id="login-modal-title">Welcome back</h1>
            <p className="login-modal__description">
              Sign in to view your account, orders, and pet-care support.
            </p>

            <form className="login-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="login-modal__group">
                <label htmlFor="login-name">Name</label>
                <span
                  className={`login-modal__field${errors.name ? " login-modal__field--error" : ""}`}
                >
                  <FiUser aria-hidden="true" />
                  <input
                    id="login-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    maxLength={fieldMaxLengths.name}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "login-name-error" : undefined}
                    autoFocus
                  />
                </span>
                {errors.name && (
                  <span className="login-modal__error" id="login-name-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="login-modal__group">
                <label htmlFor="login-email">Email address</label>
                <span
                  className={`login-modal__field${errors.email ? " login-modal__field--error" : ""}`}
                >
                  <FiMail aria-hidden="true" />
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    maxLength={fieldMaxLengths.email}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "login-email-error" : undefined}
                  />
                </span>
                {errors.email && (
                  <span className="login-modal__error" id="login-email-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="login-modal__group">
                <label htmlFor="login-password">Password</label>
                <span
                  className={`login-modal__field${errors.password ? " login-modal__field--error" : ""}`}
                >
                  <FiLock aria-hidden="true" />
                  <input
                    id="login-password"
                    name="password"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    maxLength={fieldMaxLengths.password}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? "login-password-error" : undefined}
                  />
                  <button
                    className="password-visibility-toggle"
                    type="button"
                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                    aria-pressed={isPasswordVisible}
                    onClick={() => setIsPasswordVisible((visible) => !visible)}
                  >
                    {isPasswordVisible ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
                  </button>
                </span>
                {errors.password && (
                  <span className="login-modal__error" id="login-password-error" role="alert">
                    {errors.password}
                  </span>
                )}
              </div>

              <button type="submit">Sign in</button>
            </form>

          </>
        )}
      </section>
    </div>
  );
}

export default LoginModal;
