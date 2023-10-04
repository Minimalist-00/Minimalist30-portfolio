import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-custom">
      <Header />
      <main className="mx-auto pt-12 mt-5 text-black">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
