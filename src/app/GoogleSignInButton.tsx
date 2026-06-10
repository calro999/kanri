"use client"

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import styles from "./page.module.css"

export default function GoogleSignInButton() {
  const handleLogin = async () => {
    try {
      await signIn("google", { redirectTo: "/dashboard" });
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <button 
      type="button"
      onClick={handleLogin} 
      className={styles.loginBtn}
    >
      <FcGoogle className={styles.btnIcon} />
      <span>Google アカウントでログイン</span>
    </button>
  );
}
