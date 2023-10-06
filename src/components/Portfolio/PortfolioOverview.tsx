const PortfolioOverview = () => {
  return (
    <div className="shadow-md">
      <div className={`
      lg:max-w-main mx-auto
      grid grid-cols-1 md:grid-cols-2
      pb-5 h-[460px]
      `}>
        <section>
          <div>
            <h1 className="text-[80px] font-bold">Portfolio</h1>
            <p className="text-2xl font-bold pb-10">
              制作物ギャラリーです
            </p>
            <p className="text-base font-medium text-black-lt">
              私が過去に作成してきた制作物を並べています。授業で作成したものをはじめ、個人開発やハッカソンで制作したものまで掲載しています
            </p>
          </div>
        </section>
        <div className="self-center justify-self-center">
          <img
            src="Portfolio.svg"
            alt="portfolioImage"
          />
        </div>
      </div>
    </div>
  )
}

export default PortfolioOverview
