import Image from 'next/image'
import Carousel from './Carousel'

const TopContent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-12 mb-6 border-b">
        <div className="px-5">
          <Image
            src="/img/myIconImg.svg"
            alt="Koki Nakagawa"
            width={340}
            height={340}
          />
        </div>
        <div className="w-[440px]">
          <p className="text-xl font-bold pb-5">Hi, I am</p>
          <p className="text-6xl font-bold border-blue border-b-4 mb-2">
            Minimalist30
          </p>
          <p className="text-xl font-bold text-black-sub pb-5">
            Student / Frontend developer
          </p>
          <p className="text-sm font-semibold text-black-sub2 pb-5">
            テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          </p>
          <p className="text-sm font-semibold text-blue">
            Minimalist30について詳しく知る<span> →</span>
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  )
}

export default TopContent
