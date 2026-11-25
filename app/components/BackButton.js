"use client";

import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import styles from "./BackButton.module.css";

export default function BackButton({ fallbackHref = "/", label = "Back" }) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button className={styles.backButton} type="button" onClick={handleBack}>
      <FiArrowLeft aria-hidden="true" />
      {label}
    </button>
  );
}
