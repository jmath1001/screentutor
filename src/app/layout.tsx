import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ScreenTutor — Understand Anything, Instantly',
  description: 'Press a shortcut, select any text, equation, or diagram and get a full AI explanation in seconds. Built for students.',
  openGraph: {
    title: 'ScreenTutor',
    description: 'Your AI tutor, always one shortcut away.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}