import Layout from '@/components/Layout'
import '@/styles/globals.css'
import useMousePosition from '@/utils/useMousePosition'
import type { AppProps } from 'next/app'
import styles from '../styles/index.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  const { x, y } = useMousePosition()
  const size = 40

  return (
    <main className={styles.main}>
      {/* <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
      /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
