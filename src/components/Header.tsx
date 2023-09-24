import { Box, HStack, Spacer, Flex, SimpleGrid } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

const Header = () => {
  return (
    <Box bg="gray.100">
      <SimpleGrid columns={3} spacing={10} pt="16" pb="20">
        <Box>
          <Link href="/">Minimalist30</Link>
        </Box>
        <Box>
          <HStack spacing={8} justify="space-between">
            <Link href="/about">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </HStack>
        </Box>
        <Box />
      </SimpleGrid>
    </Box>
  )
}

export default Header
