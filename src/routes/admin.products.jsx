import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Upload } from 'lucide-react'

export const Route = createFileRoute('/admin/products')({
  component: Products,
})

function Products() {
  return (
    <div className="mx-auto max-w-4xl">
      <header className="mb-8">
        <h1 className="text-gray-900 dark:text-white text-3xl font-bold tracking-tight">Cadastro de Novo Produto</h1>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Novo Produto</CardTitle>
          <CardDescription>Informações do Produto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="product-name">Nome do Produto</Label>
              <Input id="product-name" placeholder="Ex: Ácido Sulfúrico" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="cas-number">Número CAS</Label>
              <Input id="cas-number" placeholder="Ex: 7664-93-9" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="chemical-formula">Fórmula Química</Label>
              <Input id="chemical-formula" placeholder="Ex: H₂SO₄" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="purity-grade">Pureza/Grau</Label>
              <Select>
                <SelectTrigger id="purity-grade">
                  <SelectValue placeholder="Selecione a pureza/grau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pa">PA</SelectItem>
                  <SelectItem value="analitico">Analítico</SelectItem>
                  <SelectItem value="tecnico">Técnico</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Preço (R$)</Label>
                <Input id="price" placeholder="0,00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unidade</Label>
                <Select>
                  <SelectTrigger id="unit">
                    <SelectValue placeholder="Selecione a unidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Kg</SelectItem>
                    <SelectItem value="l">L</SelectItem>
                    <SelectItem value="g">g</SelectItem>
                    <SelectItem value="ml">mL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea id="description" placeholder="Forneça informações técnicas detalhadas sobre o produto." />
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="sds-upload">Ficha de Segurança (SDS/MSDS)</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="sds-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Clique para enviar</span> ou arraste e solte
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX (MAX. 5MB)</p>
                  </div>
                  <Input id="sds-upload" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div>
              <Label htmlFor="coa-upload">Certificado de Análise (CoA)</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="coa-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Clique para enviar</span> ou arraste e solte
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX (MAX. 5MB)</p>
                  </div>
                  <Input id="coa-upload" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Salvar Produto</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
