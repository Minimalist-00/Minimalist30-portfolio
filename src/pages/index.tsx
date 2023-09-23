import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import TopContent from '@/components/Top/TopContent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box as="main">
      <Head>
        <title>Minimalist30</title>
        <meta name="description" content="説明が入ります" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopContent />
    </Box>
  )
}
