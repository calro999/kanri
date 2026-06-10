import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation"
import { FcGoogle } from "react-icons/fc"
import { FiLock, FiAlertTriangle, FiArrowRight } from "react-icons/fi"
import styles from "./page.module.css"

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

  async function handleGoogleLogin() {
    "use server"
    await signIn("google", { redirectTo: "/dashboard" })
  }

  async function handleDemoLogin() {
    "use server"
    await signIn("demo-login", {
      email: "mattan029@gmail.com",
      redirectTo: "/dashboard"
    })
  }

  return (
    <main className={styles.container}>
      <div className={styles.glowBg}></div>
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
          <form action={handleGoogleLogin}>
            <button type="submit" className={styles.loginBtn}>
              <FcGoogle className={styles.btnIcon} />
              <span>Google アカウントでログイン</span>
            </button>
          </form>

          <div className={styles.divider}>
            <span>または (開発・検証用)</span>
          </div>

          <form action={handleDemoLogin}>
            <button type="submit" className={styles.demoBtn}>
              <span>デモ管理者としてログイン</span>
              <FiArrowRight className={styles.btnIconRight} />
            </button>
          </form>
        </div>

        <div className={styles.footer}>
          <p>Authorized administrator only. Access logging is active.</p>
        </div>
      </div>
    </main>
  )
}
