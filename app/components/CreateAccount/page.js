"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CreateAccount = () => {
  const router = useRouter();
  const initialFormData = {
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [visiblePasswords, setVisiblePasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setVisiblePasswords((current) => ({
      ...current,
      [field]: !current[field],
    }));
  };

  const handleCancel = () => { 
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString();
    const payload = {
      id: 0,
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailId: formData.emailId,
      mobileNumber: formData.mobileNumber,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      activeStatus: true,
      roleId: 1,
      createdDate: currentDate,
      modifiedDate: currentDate,
    };

    try {
      const response = await fetch("http://localhost:8080/api/public/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Account created successfully:", data); 
      } else {
        console.error("Failed to create account:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="createAccount">
      <div className="createAccountContainer">
        <div className="createAccountHead">
          <img
            src="/image/logo.png"
            alt="Treasuremount"
            style={{
              display: "block",
              width: "clamp(120px, 24vw, 160px)",
              height: "auto",
              marginBottom: "16px",
              objectFit: "contain",
            }}
          />
          <h2>Create Account</h2>
        </div>
        <form className="createAccountContent" onSubmit={handleSubmit}>
          <div className="content1-form">
            <div className="content1-form-inputs">
              <div className="form2">
                <label>First Name</label>
                <input
                  className="content-input"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form2">
                <label>Last Name</label>
                <input
                  className="content-input"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="content1-form-inputs">
              <div className="form2">
                <label>Contact Number</label>
                <input
                  className="content-input"
                  name="mobileNumber"
                  type="text"
                  placeholder="Contact Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form2">
                <label>Email ID</label>
                <input
                  className="content-input"
                  name="emailId"
                  type="email"
                  placeholder="Email ID"
                  value={formData.emailId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="content1-form-inputs">
              <div className="form2">
                <label htmlFor="create-account-password">Password</label>
                <div className="password-visibility-field">
                  <input
                    className="content-input"
                    id="create-account-password"
                    name="password"
                    type={visiblePasswords.password ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    className="password-visibility-toggle"
                    type="button"
                    aria-label={visiblePasswords.password ? "Hide password" : "Show password"}
                    aria-pressed={visiblePasswords.password}
                    onClick={() => togglePasswordVisibility("password")}
                  >
                    {visiblePasswords.password ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
                  </button>
                </div>
              </div>
              <div className="form2">
                <label htmlFor="create-account-confirm-password">Confirm Password</label>
                <div className="password-visibility-field">
                  <input
                    className="content-input"
                    id="create-account-confirm-password"
                    name="confirmPassword"
                    type={visiblePasswords.confirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    className="password-visibility-toggle"
                    type="button"
                    aria-label={
                      visiblePasswords.confirmPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={visiblePasswords.confirmPassword}
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    {visiblePasswords.confirmPassword ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <div className="content-btn">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button type="submit" className="update-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
