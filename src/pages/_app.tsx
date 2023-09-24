import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from '@/components/Layout'

const theme = extendTheme({
  styles: {
    global: {
      // 全体の背景色を設定
      body: {
        bg: '#fafafa', // 任意の背景色を指定
      },
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
