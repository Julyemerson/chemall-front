import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Hero() {
  return (
    <div className="px-4 py-20 lg:py-32">
      <div className="flex min-h-[480px] flex-col gap-8 items-center justify-center p-4 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
            Encontre os produtos químicos que sua empresa precisa
          </h1>
          <h2 className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal">
            Busque por nome, CAS ou fórmula para encontrar exatamente o que você precisa.
          </h2>
        </div>
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input className="pl-12 h-16" placeholder="Buscar por nome, CAS ou fórmula..." />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-5">
            Buscar
          </Button>
        </div>
      </div>
    </div>
  )
}
