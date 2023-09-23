import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box maxW="1100px" mx="auto" bg="gray.100" mt="50px">
      <Header />
      <Box
        as="main"
        maxW="900px" // メインコンテンツの最大横幅を設定
        mx="auto" // 横方向の中央寄せを行う
        mt="20px" // 上部の余白を設定
        p="20px" // コンテンツ内の余白を設定
        bg="white" // 背景色を設定
      >
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
