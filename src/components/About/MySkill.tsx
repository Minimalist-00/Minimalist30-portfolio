import Heading from "../Heading"
import SkillCard from "./SkillCard"

const MySkill = () => {

  return (
    <div className=" bg-white pt-14 pb-14">
      <div className="lg:max-w-main mx-auto">
        <Heading title="Skill" />
        <section>
          <p className="pb-8">
            テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          </p>
          <h5 className="text-2xl font-bold pb-6">Frontend</h5>
          <SkillCard />

          <h5 className="text-2xl font-bold pb-6 pt-10">Backend</h5>
          <SkillCard />

          <h5 className="text-2xl font-bold pb-6 pt-10">Design</h5>
          <SkillCard />

          <h5 className="text-2xl font-bold pb-6 pt-10">Other</h5>
          <SkillCard />

        </section>
      </div>
    </div >
  )
}

export default MySkill
