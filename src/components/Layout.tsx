import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto bg-white shadow-lg min-h-screen">
      <Header />
      <main className="mx-auto p-5 border border-gray-200">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
