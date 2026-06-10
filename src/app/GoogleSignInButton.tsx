"use client"

import { useState } from "react"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { FcGoogle } from "react-icons/fc"
import { FiLoader } from "react-icons/fi"
import styles from "./page.module.css"

export default function GoogleSignInButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMsg("");

    // Firebaseキーが設定されていない場合のシミュレーションフォールバック
    const isFirebaseUnconfigured = 
      !process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY === "MOCK_API_KEY";

    if (isFirebaseUnconfigured) {
      setTimeout(() => {
        document.cookie = `user_email=mattan029@gmail.com; path=/; max-age=86400; SameSite=Lax`;
        document.cookie = `user_name=Yuto Mattan; path=/; max-age=86400; SameSite=Lax`;
        document.cookie = `user_image=${encodeURIComponent("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80")}; path=/; max-age=86400; SameSite=Lax`;
        window.location.href = "/dashboard";
      }, 1200);
      return;
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      if (user.email === "mattan029@gmail.com") {
        // セッション Cookie を設定 (有効期限1日)
        document.cookie = `user_email=${user.email}; path=/; max-age=86400; SameSite=Lax`;
        document.cookie = `user_name=${encodeURIComponent(user.displayName || "Administrator")}; path=/; max-age=86400; SameSite=Lax`;
        document.cookie = `user_image=${encodeURIComponent(user.photoURL || "")}; path=/; max-age=86400; SameSite=Lax`;

        // ダッシュボードへリダイレクト
        window.location.href = "/dashboard";
      } else {
        // ホワイトリスト以外のユーザーをサインアウト
        await signOut(auth);
        window.location.href = "/?error=AccessDenied";
      }
    } catch (error: any) {
      console.error("Firebase Sign in failed:", error);
      setErrorMsg("認証が失敗しました。Firebaseのキーが正しいか確認してください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <button 
        type="button"
        onClick={handleLogin} 
        className={styles.loginBtn}
        disabled={isLoading}
      >
        {isLoading ? (
          <FiLoader style={{ fontSize: "1.4rem", animation: "pulse-slow 2s infinite" }} />
        ) : (
          <FcGoogle className={styles.btnIcon} />
        )}
        <span>{isLoading ? "認証中..." : "Google アカウントでログイン"}</span>
      </button>
      {errorMsg && (
        <div style={{ color: "#f87171", fontSize: "0.8rem", marginTop: "0.5rem", textAlign: "center" }}>
          {errorMsg}
        </div>
      )}
    </div>
  );
}
