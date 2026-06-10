"use client"

import { useState, useTransition } from "react"
import { signOut as firebaseSignOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Project } from "@/data/projects"
import { 
  FiSearch, 
  FiLogOut, 
  FiExternalLink, 
  FiGrid, 
  FiMessageCircle, 
  FiBookOpen, 
  FiLayers, 
  FiGlobe,
  FiSmile,
  FiUser
} from "react-icons/fi"
import styles from "./dashboard.module.css"

interface DashboardClientProps {
  user: {
    name: string;
    email: string;
    image: string;
  };
  initialProjects: Project[];
}

type CategoryFilter = "all" | "sns" | "yui" | "yuto" | "portal" | "other";

export default function DashboardClient({ user, initialProjects }: DashboardClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all")
  const [isPending, startTransition] = useTransition()

  // ログアウト処理
  const handleLogout = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Firebase Signout error:", error);
    }
    // Cookie の消去
    document.cookie = "user_email=; path=/; max-age=0";
    document.cookie = "user_name=; path=/; max-age=0";
    document.cookie = "user_image=; path=/; max-age=0";
    window.location.href = "/";
  }

  // フィルタリング処理
  const filteredProjects = initialProjects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch = 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.url.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  })

  // カテゴリ名マッピング
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "sns": return "SNS公式"
      case "yui": return "ゆいシリーズ"
      case "yuto": return "ゆうとシリーズ"
      case "portal": return "学習・ポータル"
      case "other": return "自動化・その他"
      default: return category
    }
  }

  // カテゴリカラーマッピング
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "sns": return styles.badgeSns;
      case "yui": return styles.badgeYui;
      case "yuto": return styles.badgeYuto;
      case "portal": return styles.badgePortal;
      case "other": return styles.badgeOther;
      default: return "";
    }
  }

  // カテゴリアイコン
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sns": return <FiMessageCircle />
      case "yui": return <FiSmile />
      case "yuto": return <FiUser />
      case "portal": return <FiBookOpen />
      case "other": return <FiLayers />
      default: return <FiGlobe />
    }
  }

  // 統計情報
  const stats = {
    total: initialProjects.length,
    sns: initialProjects.filter(p => p.category === "sns").length,
    yui: initialProjects.filter(p => p.category === "yui").length,
    yuto: initialProjects.filter(p => p.category === "yuto").length,
    portal: initialProjects.filter(p => p.category === "portal").length,
    other: initialProjects.filter(p => p.category === "other").length,
  }

  return (
    <div className={styles.dashboardContainer}>
      {/* ナビゲーションバー */}
      <header className={`${styles.header} glass-panel`}>
        <div className={styles.logo}>
          <span className="text-gradient">KANRI.DASHBOARD</span>
        </div>
        <div className={styles.userInfo}>
          {user.image ? (
            <img src={user.image} alt={user.name} className={styles.avatar} />
          ) : (
            <div className={styles.avatarFallback}>{user.name.charAt(0)}</div>
          )}
          <div className={styles.userDetails}>
            <span className={styles.userName}>{user.name}</span>
            <span className={styles.userEmail}>{user.email}</span>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn} title="ログアウト">
            <FiLogOut />
          </button>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className={styles.mainContent}>
        {/* 統計パネル */}
        <section className={styles.statsGrid}>
          <div className={`${styles.statCard} glass-panel`}>
            <span className={styles.statVal}>{stats.total}</span>
            <span className={styles.statLabel}>総プロジェクト数</span>
          </div>
          <div className={`${styles.statCard} glass-panel`}>
            <span className={styles.statVal}>{stats.sns}</span>
            <span className={styles.statLabel}>SNSアカウント</span>
          </div>
          <div className={`${styles.statCard} glass-panel`}>
            <span className={styles.statVal}>{stats.yui + stats.yuto}</span>
            <span className={styles.statLabel}>ゆい＆ゆうとシリーズ</span>
          </div>
          <div className={`${styles.statCard} glass-panel`}>
            <span className={styles.statVal}>{stats.portal + stats.other}</span>
            <span className={styles.statLabel}>ポータル・その他</span>
          </div>
        </section>

        {/* コントロールセクション */}
        <section className={styles.controls}>
          <div className={`${styles.searchWrapper} glass-panel`}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="プロジェクト名、説明、URLで検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.categoryFilters}>
            {(["all", "sns", "yui", "yuto", "portal", "other"] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""} glass-panel`}
              >
                {cat === "all" ? <FiGrid /> : getCategoryIcon(cat)}
                <span>{cat === "all" ? "すべて" : getCategoryLabel(cat)}</span>
              </button>
            ))}
          </div>
        </section>

        {/* プロジェクトグリッド */}
        <section className={styles.projectGrid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projectCard} glass-panel`}
              >
                <div className={styles.cardHeader}>
                  <span className={`${styles.categoryBadge} ${getCategoryBadgeClass(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    {getCategoryLabel(project.category)}
                  </span>
                  <FiExternalLink className={styles.linkIcon} />
                </div>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectUrl} title={project.url}>
                  {project.url}
                </div>
              </a>
            ))
          ) : (
            <div className={`${styles.emptyState} glass-panel`}>
              <p>該当するプロジェクトが見つかりません。</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
