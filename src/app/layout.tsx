import './globals.css'
import type { Metadata } from 'next'
import {Anton, Epilogue, Poppins, Space_Grotesk} from 'next/font/google'
import {NavBar} from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: 'Brent Dolan',
  description: 'Portfolio Website',
}

const epilogue = Anton({
    subsets: ['latin'],
    variable: '--headingFont',
    weight: '400'
})

const poppins = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--primaryFont',
    display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className} ${epilogue.variable}`}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
