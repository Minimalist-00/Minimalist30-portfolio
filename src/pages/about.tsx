import { Box, Divider } from '@chakra-ui/react'
import Carousel from '@/components/About/Carousel'
import AboutTopArea from '@/components/About/AboutOverview'
import MyField from '@/components/About/MyField'

const about = () => {
  return (
    <Box h="10000">
      <AboutTopArea />
      <Divider mb="5" />
      <Carousel />
      <MyField />
    </Box>
  )
}

export default about
