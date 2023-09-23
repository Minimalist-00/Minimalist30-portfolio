import Head from 'next/head'
import { Inter } from 'next/font/google'
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react'

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
      <Box>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
          <GridItem>
            <Heading>Minimalist30</Heading>
            <Text>
              「当店（当サイト）にご来店いただき、誠にありがとうございます。私
              Minimalist30 こと、中川航輝
              についてより知っていただきたく、このサイトを作成しました。ごゆるりとご覧くださいませ。」
            </Text>
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              src="/img/face.jpg"
              boxSize="300px"
              h="full"
              alt="Koki Nakagawa"
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
