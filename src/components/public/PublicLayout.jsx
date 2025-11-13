import { Header } from '@/components/public/Header'
import { Footer } from '@/components/public/Footer'
import { Outlet } from '@tanstack/react-router'

export function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
