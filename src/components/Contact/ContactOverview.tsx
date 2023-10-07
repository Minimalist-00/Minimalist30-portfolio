import Link from 'next/link'

const ContactOverview = () => {
  const snsItems = [
    {
      name: 'Twitter (X)',
      url: 'https://twitter.com/Minimalist30_',
      icon: 'twitter_blue.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/naka.0_0/',
      icon: 'instagram_blue.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/%E8%88%AA%E8%BC%9D-%E4%B8%AD%E5%B7%9D-236443292/',
      icon: 'linkedin_blue.svg',
    },
  ]

  return (
    <div className="shadow-md">
      <div
        className={`
      lg:max-w-main mx-auto
      grid grid-cols-1 md:grid-cols-2
      pb-5 h-[460px]
      `}
      >
        <section className="w-[500px]">
          <div>
            <h1 className="text-[80px] font-bold">Contact</h1>
            <p className="text-2xl font-bold pb-10">
              Minimalist30に興味を持ってくださった方へ
            </p>
            <p className="text-base font-medium text-black-lt">
              御用の方は以下の連絡先もしくはコンタクトフォームからご連絡下さい。感想やゲームのお誘いでも大歓迎です
            </p>
            <div>
              <li className="grid grid-cols-2 mt-12">
                {snsItems.map((snsItem) => (
                  <div className="mb-6">
                    <Link
                      href={snsItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-row items-center">
                        <img
                          src={`icons/${snsItem.icon}`}
                          alt={snsItem.name}
                          className="h-[50px] w-[50px] mr-2"
                        />
                        <p className="text-lg font-bold text-black-lt mt-2">
                          {snsItem.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </li>
            </div>
          </div>
          <div className="grid grid-cols-2"></div>
        </section>
        <div className="justify-self-center">
          <img src="Contact.svg" alt="contactImage" />
        </div>
      </div>
    </div>
  )
}

export default ContactOverview
