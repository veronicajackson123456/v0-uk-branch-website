import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CNBC Film UK | Corporate Network Broadcasting Cinema',
  description:
    'CNBC Film UK is the British division of Corporate Network Broadcasting Cinema — recruiting top talent, attracting film sponsors, and expanding cinematic and broadcasting excellence across the United Kingdom.',
  keywords: 'CNBC Film UK, Corporate Network Broadcasting Cinema, UK film production, film sponsorship, talent recruitment, broadcasting, entertainment, London film',
  openGraph: {
    title: 'CNBC Film UK | Corporate Network Broadcasting Cinema',
    description: 'The official UK division of Corporate Network Broadcasting Cinema.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
