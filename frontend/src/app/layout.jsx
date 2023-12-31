import { ToastContainer } from 'react-toastify'
import Navbar from '../components/navbar/page'
import './globals.css'
import { Rubik } from 'next/font/google'

import 'react-toastify/dist/ReactToastify.css';

const inter = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body className={inter.className}>
      

        <ToastContainer />
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
