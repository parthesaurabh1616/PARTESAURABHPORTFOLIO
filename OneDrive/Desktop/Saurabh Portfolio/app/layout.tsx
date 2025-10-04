import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://partesaurabhportfolio.vercel.app'),
  title: 'Saurabh | Software Engineer & Full Stack Developer',
  description: 'Passionate Software Engineer specializing in Full Stack Development, Cloud Architecture, and DevOps. Explore my projects and connect with me!',
  keywords: 'software engineer, full stack developer, cloud engineer, devops, portfolio, saurabh',
  authors: [{ name: 'Saurabh' }],
  openGraph: {
    title: 'Saurabh | Software Engineer & Full Stack Developer',
    description: 'Passionate Software Engineer specializing in Full Stack Development, Cloud Architecture, and DevOps.',
    type: 'website',
    url: 'https://partesaurabhportfolio.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-dark-bg text-white">
        {children}
      </body>
    </html>
  )
}
