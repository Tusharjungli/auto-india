import './globals.css'

export const metadata = {
  title: 'Auto India Spare Part',
  description: 'Built for India. Inspired by Excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  )
}
