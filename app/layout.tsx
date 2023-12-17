// 'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav/Nav'
import { Background } from '@/components/Misc/Misc'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blueprint',
  description: 'The Blueprint Protocol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
       
<link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;1,300;1,400&family=Montserrat:ital,wght@0,300;0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
       </head>
      <body className={inter.className}>{children}
      <Nav/>
      </body>
    </html>
  )
}
