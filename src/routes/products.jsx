import { createFileRoute } from '@tanstack/react-router'
import { Filters } from '@/components/public/Filters'
import { ProductTable } from '@/components/public/ProductTable'
import { Pagination } from '@/components/public/Pagination'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export const Route = createFileRoute('/products')({
  component: Products,
})

function Products() {
  return (
    <div className="flex">
      <Filters />
      <main className="flex-1 p-6">
        <div className="flex flex-wrap justify-between items-center gap-3 p-4 mb-4">
          <h1 className="text-gray-900 dark:text-white text-4xl font-black tracking-tighter">Catálogo de Produtos</h1>
        </div>
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input className="pl-10" placeholder="Pesquisar por nome do produto ou número CAS" />
          </div>
        </div>
        <ProductTable />
        <Pagination />
      </main>
    </div>
  )
}
