import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box maxW="1100px" mx="auto" bg="#fff" mt="50px" pb="30px">
      <Header />
      <Box as="main" maxW="900px" mx="auto" mt="20px" p="20px">
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
