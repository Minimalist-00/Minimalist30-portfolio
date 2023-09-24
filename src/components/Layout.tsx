import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box maxW="1164px" mx="auto" bg="#fff" boxShadow="lg" minHeight="100vh">
      <Header />
      <Box as="main" maxW="1248px" mx="auto" p="20px" border="1px">
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
