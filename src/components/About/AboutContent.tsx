import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react'
import Carousel from './Carousel'

const AboutContent = () => {
  return (
    <Box>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} pb="5">
        <GridItem>
          <VStack spacing={4}>
            <Heading>About</Heading>
            <Text fontSize="lg">
              ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。
            </Text>
            <Text fontSize="sm">
              ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。
            </Text>
          </VStack>
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
      <Divider />
      <Carousel />
    </Box>
  )
}

export default AboutContent
