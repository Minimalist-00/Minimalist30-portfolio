import SkillCard from "./SkillCard"

const MySkill = () => {

  return (
    <div className="w-screen bg-white pt-14 pb-14">
      <div className="lg:max-w-main mx-auto">
        <section>
          <div className="flex items-center pb-8">
            <rect className="w-3 h-10 bg-blue mr-2" />
            <h2 className="text-3xl font-bold pt-1">Skill</h2>
          </div>
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
    </div>
  )
}

export default MySkill
