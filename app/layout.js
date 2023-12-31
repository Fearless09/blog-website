import { Inter } from 'next/font/google'
import './globals.css'
import ContextProvider from './api/ContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Website',
  description: 'Generated by create next app',
  image: './demoUser.png'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} text-[#29394E]`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
