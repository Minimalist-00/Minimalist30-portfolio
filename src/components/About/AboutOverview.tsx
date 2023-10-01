const AboutOverview = () => {
  return (
    <div className="w-screen shadow-2xl">
      <div className="lg:max-w-main mx-auto grid grid-cols-1 md:grid-cols-2 pb-5 h-[460px]">
        <section>
          <div>
            <h1 className="text-[80px] font-bold">About</h1>
            <p className="text-2xl font-bold pb-10">
              <span>Minimalist30 こと、</span>
              <span className="text-blue">中川航輝 </span>
              <span>です。</span>
            </p>
            <p className="text-base font-medium text-black-lt">
              中川航輝という人間についてより興味を持ってもらいたく、スキルや得意･興味のある領域に加えて、趣味や思い出まで紹介します
            </p>
          </div>
        </section>
        <div className="self-center justify-self-center">
          <img
            src="img/face.jpg"
            alt="myFace"
            className="h-[380px] rounded-[20px] shadow-md border-2 border-white-500"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutOverview
