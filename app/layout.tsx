import './globals.css'
import { Roboto } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Header from './components/header'

const roboto = Roboto({ weight:"400",subsets: ['latin'] })

export const metadata = {
  title: 'Expense Tracker',
  description: 'track your expenses and create a budget',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className='container'>
        
        {children}
        </main>
        
        </body>
    </html>
    </ClerkProvider>
  )
}
