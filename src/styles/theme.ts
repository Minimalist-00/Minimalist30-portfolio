import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'noto-sans-jp, sans-serif',
    heading: 'noto-sans-jp, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
  },
  colors: {
    black: '#282828',
    subBlack: '#333',
    gray: '#444B54',
    subGray: '#555555',
    lightGray: '#585858',
  },
  styles: {
    global: {
      'html, body': {
        color: 'black',
        bg: '#fff',
      },
    },
  },
})

export default theme
