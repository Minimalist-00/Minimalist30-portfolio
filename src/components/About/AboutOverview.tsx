import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

const AboutTopArea = () => {
  return (
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
  )
}

export default AboutTopArea
