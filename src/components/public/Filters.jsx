import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function Filters() {
  return (
    <aside className="flex flex-col w-64 p-4 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Filtros</h2>
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="grade-select">Grau</Label>
          <Select>
            <SelectTrigger id="grade-select">
              <SelectValue placeholder="Selecione o grau" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tecnico">Grau Técnico</SelectItem>
              <SelectItem value="farmaceutico">Grau Farmacêutico</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="purity-select">Pureza</Label>
          <Select>
            <SelectTrigger id="purity-select">
              <SelectValue placeholder="Selecione a pureza" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="99">&gt;99%</SelectItem>
              <SelectItem value="95">&gt;95%</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fabricante</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox id="manufacturer-a" />
              <Label htmlFor="manufacturer-a" className="ml-2">Fabricante A</Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="manufacturer-b" />
              <Label htmlFor="manufacturer-b" className="ml-2">Fabricante B</Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="manufacturer-c" />
              <Label htmlFor="manufacturer-c" className="ml-2">Fabricante C</Label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto space-y-2">
        <Button>Aplicar Filtros</Button>
        <Button variant="ghost">Limpar Filtros</Button>
      </div>
    </aside>
  )
}
