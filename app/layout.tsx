'use client'
import Appbar from '../components/Appbar'
import Providers from '@/components/Providers'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Providers>
        <Appbar />
        {children}
      </Providers>
    </>
  )
}
