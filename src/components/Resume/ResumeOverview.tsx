const ResumeOverview = () => {
  return (
    <div className="shadow-md">
      <div className={`
    lg:max-w-main mx-auto
    grid grid-cols-1 md:grid-cols-2
    pb-5 h-[460px]
    `}>
        <section>
          <div>
            <h1 className="text-[80px] font-bold">Resume</h1>
            <p className="text-2xl font-bold pb-10">
              経験（経歴や挑戦）と受賞歴
            </p>
            <p className="text-base font-medium text-black-lt">
              私が大学に入学してからの経歴と、過去の実績･受賞歴などをご紹介します
            </p>
          </div>
        </section>
        <div className="self-center justify-self-center">
          <img
            src="Resume.svg"
            alt="resumeImage"
          />
        </div>
      </div>
    </div>
  )
}

export default ResumeOverview
