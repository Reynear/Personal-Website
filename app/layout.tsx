import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reynear Douglas',
  description: 'Created by Reynear Douglas',
  generator: 'Reynear Douglas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
