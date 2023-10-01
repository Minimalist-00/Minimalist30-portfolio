import { Box, HStack, Spacer, Flex, SimpleGrid, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const item = {
    fontWeight: 'bold',
  }
  const hoverItem = {
    color: '#5589f7',
  }

  const activeStyle = {
    color: '#5589f7',
  }

  return (
    <Box pt={6} pb={16}>
      <SimpleGrid columns={3} spacing={10} alignItems="center">
        <Box height={16}>
          <Link href="/">
            <Image src="minimalist30_logo.png" alt="" h="100%" fit="contain" />
          </Link>
        </Box>
        <Box>
          <HStack spacing={2} justify="space-between">
            <Box>
              <Link
                href="/about"
                fontWeight="bold"
                _hover={hoverItem}
                style={router.pathname === '/about' ? activeStyle : {}}
              >
                About
              </Link>
            </Box>
            <Box>
              <Link
                href="/resume"
                fontWeight="bold"
                _hover={hoverItem}
                style={router.pathname === '/resume' ? activeStyle : {}}
              >
                Resume
              </Link>
            </Box>
            <Box>
              <Link
                href="/portfolio"
                fontWeight="bold"
                _hover={hoverItem}
                style={router.pathname === '/portfolio' ? activeStyle : {}}
              >
                Portfolio
              </Link>
            </Box>
            <Box>
              <Link
                href="/contact"
                fontWeight="bold"
                _hover={hoverItem}
                style={router.pathname === '/contact' ? activeStyle : {}}
              >
                Contact
              </Link>
            </Box>
          </HStack>
        </Box>
        <Box />
      </SimpleGrid>
    </Box>
  )
}

export default Header
