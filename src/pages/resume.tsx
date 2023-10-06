import Experience from "@/components/Resume/Experience"
import ResumeOverview from "@/components/Resume/ResumeOverview"
import Event from "@/components/Resume/Event"
import Award from "@/components/Resume/Award"

const resume = () => {
  return (
    <div>
      <ResumeOverview />
      <Experience />
      <Event />
      <Award />
    </div>
  )
}

export default resume
