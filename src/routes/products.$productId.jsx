import { createFileRoute } from '@tanstack/react-router'
import products from '@/data/products.json'
import { notFound } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Download, ShoppingCart } from 'lucide-react'

export const Route = createFileRoute('/products/$productId')({
  component: Product,
  loader: ({ params }) => {
    const product = products.find(p => p.id === params.productId)
    if (!product) {
      throw notFound()
    }
    return product
  }
})

function Product() {
  const product = Route.useLoaderData()

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <Card>
            <CardContent className="p-4 flex justify-center items-center aspect-square">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
            </CardContent>
          </Card>
          <div>
            <h2 className="text-gray-900 dark:text-gray-100 text-xl font-bold">Documentação</h2>
            <div className="flex flex-col gap-3 mt-3">
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                Download SDS/MSDS
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                Download CoA
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                CAS: {product.casNumber}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                Fórmula: {product.chemicalFormula}
              </span>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Especificações</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <>
                    <dt className="font-medium">{key}</dt>
                    <dd>{value}</dd>
                  </>
                ))}
              </dl>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Opções de Compra</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="volume">Volume/Embalagem</label>
                  <Select>
                    <SelectTrigger id="volume">
                      <SelectValue placeholder="Selecione o volume" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.purchaseOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="quantity">Quantidade</label>
                  <Input id="quantity" type="number" defaultValue="1" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 gap-2">
                  <ShoppingCart size={16} />
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outline" className="flex-1">
                  Solicitar Cotação
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
