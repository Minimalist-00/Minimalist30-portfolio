import { Box, HStack, Spacer, Flex } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

const Header = () => {
  return (
    <Box>
      <Flex align="center" p={4}>
        <Box>
          <Link href="/">Home</Link>
        </Box>
        <Spacer />
        <HStack spacing={8}>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
