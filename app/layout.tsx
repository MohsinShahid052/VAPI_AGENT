import type { Metadata } from 'next'
import { Inter, Azeret_Mono  } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'

const geistSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Azeret_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'VAPI AGENT',
  // description: 'An amazing dashboard built with Next.js and shadcn/ui',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-zinc-800">
          <div className="flex flex-1 flex-col lg:flex-row">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-4 lg:p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'