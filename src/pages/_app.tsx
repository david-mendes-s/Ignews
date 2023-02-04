import {Roboto} from '@next/font/google'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

const poppins = Roboto({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight:'400',
})

export default function App({ Component, pageProps }: AppProps) {
  return  <main className={`${poppins.variable} font-sans`}>
            <Component {...pageProps} />
          </main>
  
}
