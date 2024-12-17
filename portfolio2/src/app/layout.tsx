import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hooriya Siddique',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={` antialiased `}
      >
        <Header/>
       
        
       {children} 
      
      </body>
    </html>
  );
}
