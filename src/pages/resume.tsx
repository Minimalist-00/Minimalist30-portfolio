import Heading from "@/components/Heading"
import Experience from "@/components/Resume/Experience"
import ResumeOverview from "@/components/Resume/ResumeOverview"

const resume = () => {
  return (
    <div>
      <ResumeOverview />
      <Heading title="Experience" />
      <Experience />
      <Heading title="Event" />
    </div>
  )
}

export default resume
