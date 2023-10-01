import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-center space-x-4">
        <Link href="https://twitter.com/Minimalist_30">
          <img src="/icons/Twitter.svg" alt="Twitter" className="w-6 h-6" />
        </Link>
        <Link href="/">
          <img src="/icons/GitHub.svg" alt="GitHub" className="w-6 h-6" />
        </Link>
        <Link href="/">
          <img src="/icons/Instagram.svg" alt="Instagram" className="w-6 h-6" />
        </Link>
        <Link href="/">
          <img src="/icons/Linkedin.svg" alt="Linkedin" className="w-6 h-6" />
        </Link>
        <Link href="/">
          <img src="/icons/Dribbble.svg" alt="Dribbble" className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
