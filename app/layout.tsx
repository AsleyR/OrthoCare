import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navbar from './(components)/navbar/Navbar'
import Footer from './(components)/Footer'

export const metadata: Metadata = {
  title: 'OrthoCare',
  description: 'Transforming lives, one smile at a time',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const merry = Merriweather({
  subsets: ['latin'],
  weight: ["300", "400", "700", "900"],
  variable: '--font-merryweather'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merry.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
