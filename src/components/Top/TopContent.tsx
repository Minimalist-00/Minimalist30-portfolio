import Image from 'next/image'
import Carousel from '../About/Carousel'

const TopContent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="self-center">
          <div className="relative h-96 w-96">
            <Image
              src="/img/myIconCover.svg"
              alt="Koki Nakagawa"
              layout="fill"
              objectFit="cover"
            />
            <Image
              src="/img/myIconCoverWhite.svg"
              alt="Koki Nakagawa"
              layout="fill"
            />
            <Image
              src="/img/myIcon.svg"
              alt="Koki Nakagawa"
              layout="fill"
              className="z-10"
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold pb-1">Hi, I am</p>
          <p className="text-6xl font-bold">Minimalist30</p>
          <p className="text-xl font-bold text-gray-600">
            Student / Frontend developer
          </p>
          <p className="text-sm font-bold text-gray-700">
            テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  )
}

export default TopContent
