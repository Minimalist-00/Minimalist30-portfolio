import { Box, HStack, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

const Footer = () => {
  return (
    <Box as="footer" pt="20px">
      <HStack spacing={4} align="center" justify="center">
        <Link href="https://twitter.com/Minimalist_30">
          <Image src="/icons/Twitter.svg" alt="Twitter" boxSize="24px" />
        </Link>
        <Link href="/">
          <Image src="/icons/GitHub.svg" alt="GitHub" boxSize="24px" />
        </Link>
        <Link href="/">
          <Image src="/icons/Instagram.svg" alt="Instagram" boxSize="24px" />
        </Link>
        <Link href="/">
          <Image src="/icons/Linkedin.svg" alt="Linkedin" boxSize="24px" />
        </Link>
        <Link href="/">
          <Image src="/icons/Dribbble.svg" alt="Dribbble" boxSize="24px" />
        </Link>
      </HStack>
    </Box>
  )
}

export default Footer
