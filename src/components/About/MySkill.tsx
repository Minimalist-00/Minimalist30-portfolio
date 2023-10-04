import SkillCard from "./SkillCard"

const MySkill = () => {

  return (
    <div className="h-[500px] w-screen bg-white">
      <div className="lg:max-w-main mx-auto pt-14">
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
        <div>{/* 学校のロゴや研究室のロゴを載せる */}</div>
      </div>
    </div>
  )
}

export default MySkill