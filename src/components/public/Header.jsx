import { Search, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/AuthContext'

export function Header() {
  const { user, login, logout } = useAuth()

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
            <User size={20} />
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">ChemBiz</h2>
        </div>
        <div className="flex items-center gap-9">
          <a className="text-slate-900 dark:text-white text-sm font-medium leading-normal" href="#">Categories</a>
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input className="pl-10" placeholder="Search" />
        </div>
        {user ? (
          <Button onClick={logout} variant="ghost">Logout</Button>
        ) : (
          <>
            <Button onClick={() => login('customer')} variant="ghost">Login as Customer</Button>
            <Button onClick={() => login('admin')} variant="ghost">Login as Admin</Button>
          </>
        )}
        <Button size="icon" variant="ghost" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">2</span>
        </Button>
      </div>
    </header>
  )
}
