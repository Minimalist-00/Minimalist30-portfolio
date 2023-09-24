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
import Carousel from '@/components/About/Carousel'
import AboutTopArea from '@/components/About/AboutOverview'

const about = () => {
  return (
    <Box>
      <AboutTopArea />
      <Divider mb="5" />
      <Carousel />
    </Box>
  )
}

export default about
