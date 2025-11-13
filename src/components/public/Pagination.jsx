import { Button } from '@/components/ui/button'

export function Pagination() {
  return (
    <div className="flex items-center justify-between px-4 py-3 mt-4">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Mostrando
            <span className="font-medium"> 1 </span>
            a
            <span className="font-medium"> 5 </span>
            de
            <span className="font-medium"> 25 </span>
            resultados
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <Button variant="outline">Anterior</Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">...</span>
            <Button variant="outline">8</Button>
            <Button variant="outline">Próximo</Button>
          </nav>
        </div>
      </div>
    </div>
  )
}
