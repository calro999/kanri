import { projects } from "@/data/projects"
import DashboardClient from "@/app/dashboard/DashboardClient"

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <DashboardClient initialProjects={projects} />
    </main>
  )
}

