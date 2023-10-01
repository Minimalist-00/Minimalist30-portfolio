import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const itemClasses = 'font-bold'
  const hoverItemClasses = 'hover:text-blue-500'
  const activeStyle = 'text-blue-500'

  return (
    <header className="pt-6 pb-16">
      <div className="flex items-center justify-between">
        <div className="h-16">
          <Link href="/">
            <img
              src="minimalist30_logo.png"
              alt=""
              className="h-full object-contain"
            />
          </Link>
        </div>
        <div className="flex space-x-3">
          <div>
            <Link
              href="/about"
              className={
                itemClasses +
                ' ' +
                (router.pathname === '/about' ? activeStyle : '')
              }
            >
              About
            </Link>
          </div>
          <div>
            <Link
              href="/resume"
              className={
                itemClasses +
                ' ' +
                (router.pathname === '/resume' ? activeStyle : '')
              }
            >
              Resume
            </Link>
          </div>
          <div>
            <Link
              href="/portfolio"
              className={
                itemClasses +
                ' ' +
                (router.pathname === '/portfolio' ? activeStyle : '')
              }
            >
              Portfolio
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className={
                itemClasses +
                ' ' +
                (router.pathname === '/contact' ? activeStyle : '')
              }
            >
              Contact
            </Link>
          </div>
        </div>
        <div />
      </div>
    </header>
  )
}

export default Header
