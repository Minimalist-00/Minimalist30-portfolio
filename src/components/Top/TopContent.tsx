import { Box, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react'

const TopContent = () => {
  return (
    <Box>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
        <GridItem>
          <Heading>
            <span>Hi!</span> <span>I&apos;m Minimalist30</span>
          </Heading>

          <Text fontSize={['3vh']} fontWeight="bold">
            「当店（当サイト）にご来店いただき、誠にありがとうございます。私
            Minimalist30 こと、中川航輝
            についてより知っていただきたく、このサイトを作成しました。ごゆるりとご覧くださいませ。」
          </Text>
        </GridItem>
        <GridItem justifySelf="center">
          <Image
            src="/img/myIcon.png"
            boxSize="350px"
            h="full"
            alt="Koki Nakagawa"
          />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default TopContent
