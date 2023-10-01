import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Divider,
} from '@chakra-ui/react'
import Carousel from '../About/Carousel'

const TopContent = () => {
  return (
    <Box>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
        <GridItem justifySelf="center" boxSize={450}>
          <Image
            src="/img/myIconCover.svg" // 後ろの画像のパスを指定
            alt="Koki Nakagawa"
            position="absolute" // 画像の位置を絶対位置に変更
            transform="translate(15px, 15px)" // 画像を右下にずらす
          />
          <Image
            src="/img/myIconCoverWhite.svg"
            alt="Koki Nakagawa"
            position="absolute"
          />
          <Image
            src="/img/myIcon.svg"
            alt="Koki Nakagawa"
            position="absolute"
            zIndex={1}
          />
        </GridItem>
        <GridItem>
          <Text fontSize={'xl'} fontWeight="Bold" pb={1}>
            Hi, I am
          </Text>
          <Text fontSize={60} fontWeight="bold">
            Minimalist30
          </Text>
          <Text fontSize={'xl'} fontWeight="bold" color="#585858">
            Student / Frontend developer
          </Text>
          <Text fontSize={'sm'} fontWeight="bold" color="#555">
            テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          </Text>
        </GridItem>
      </Grid>
      <Divider mb="5" />
      <Carousel />
    </Box>
  )
}

export default TopContent
