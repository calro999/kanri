import { auth } from "@/auth"
import { redirect } from "next/navigation"
import DashboardClient from "@/app/dashboard/DashboardClient"
import { projects } from "@/data/projects"

export default async function DashboardPage() {
  const session = await auth()

  // 認証ガード: mattan029@gmail.com のメールアドレスのみにアクセスを限定
  if (!session?.user || session.user.email !== "mattan029@gmail.com") {
    redirect("/")
  }

  return (
    <DashboardClient 
      user={{
        name: session.user.name || "Administrator",
        email: session.user.email,
        image: session.user.image || ""
      }}
      initialProjects={projects}
    />
  )
}
