import './globals.css'
import type { Metadata } from 'next'
import { Epilogue, Poppins } from 'next/font/google'
import {NavBar} from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: 'Brent Dolan',
  description: 'Portfolio Website',
}

const epilogue = Epilogue({
    subsets: ['latin'],
    variable: '--headingFont',
    display: 'swap'
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
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
