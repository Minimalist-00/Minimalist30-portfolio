import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="lg:max-w-main mx-auto bg-white min-h-screen font-custom">
      <Header />
      <main className="mx-auto pt-12 mt-5 text-black">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
