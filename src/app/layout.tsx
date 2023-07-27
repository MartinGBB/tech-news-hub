import { Roboto, Roboto_Condensed as RobotoCondensed } from 'next/font/google'
import '../globals.css'
import Navbar from './components/navbar/Navbar'
import { ReactNode } from 'react'

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
})

export const robotoCondensed = RobotoCondensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: '400',
})

export const metadata = {
  title: 'news-hub',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
