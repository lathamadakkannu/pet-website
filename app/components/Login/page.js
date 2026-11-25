"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginModal from "./LoginModal";

function LoginPage() {
  const router = useRouter();

  return <LoginModal onClose={() => router.push("/")} />;
}

export default LoginPage;
