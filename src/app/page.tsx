import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { FiLock, FiAlertTriangle } from "react-icons/fi"
import styles from "./page.module.css"
import GoogleSignInButton from "./GoogleSignInButton"

interface PageProps {
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function LoginPage({ searchParams }: PageProps) {
  const session = await auth()

  // 既に制限対象の正しい管理者としてログイン済みならダッシュボードへ遷移
  if (session?.user?.email === "mattan029@gmail.com") {
    redirect("/dashboard")
  }

  const resolvedParams = await searchParams;
  const errorType = resolvedParams?.error;
  const isAccessDenied = errorType === "AccessDenied" || errorType === "Configuration";

  return (
    <main className={styles.container}>
      <div className={styles.glowBg}></div>
      <div className={styles.glowBg2}></div>
      <div className={`${styles.card} glass-panel`}>
        <div className={styles.header}>
          <div className={styles.logoIcon}>
            <FiLock className={styles.lockSvg} />
          </div>
          <h1 className="text-gradient">KANRI PORTAL</h1>
          <p className={styles.subtitle}>
            YUI & YUTO プロジェクト一括管理システム
          </p>
        </div>

        {isAccessDenied && (
          <div className={styles.errorBanner}>
            <FiAlertTriangle className={styles.errorIcon} />
            <div className={styles.errorText}>
              <strong>アクセス拒否</strong>
              <span>mattan029@gmail.com アカウントのみログインが許可されています。</span>
            </div>
          </div>
        )}

        <div className={styles.authSection}>
          <GoogleSignInButton />
        </div>

        <div className={styles.footer}>
          <p>Authorized administrator only. Access logging is active.</p>
        </div>
      </div>
    </main>
  )
}
