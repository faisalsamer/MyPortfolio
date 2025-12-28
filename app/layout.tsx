import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/theme-context'

export const metadata: Metadata = {
  title: 'Faisal Samer | Full-Stack Developer',
  description:
    'Portfolio of Faisal Samer - Full-Stack Developer building production-ready web applications with React, Next.js, and TypeScript. Experienced in developing SaaS platforms, real-time systems, and AI-powered dashboards using PostgreSQL, Firebase, and modern cloud technologies.',
  icons: {
    icon: [
      {
        url: '/favicon-light.svg',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/favicon-dark.svg',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body style={{ fontFamily: 'var(--font-family-primary)' }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
