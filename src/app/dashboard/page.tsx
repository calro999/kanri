import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import DashboardClient from "@/app/dashboard/DashboardClient"
import { projects } from "@/data/projects"

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const userEmail = cookieStore.get("user_email")?.value
  const userName = cookieStore.get("user_name")?.value || "Administrator"
  const userImage = cookieStore.get("user_image")?.value || ""

  // 認証ガード: mattan029@gmail.com のメールアドレスのみにアクセスを限定
  if (userEmail !== "mattan029@gmail.com") {
    redirect("/")
  }

  return (
    <DashboardClient 
      user={{
        name: userName,
        email: userEmail,
        image: userImage
      }}
      initialProjects={projects}
    />
  )
}
