import { createFileRoute } from '@tanstack/react-router'
import orders from '@/data/orders.json'
import products from '@/data/products.json'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash2, AlertTriangle } from 'lucide-react'

export const Route = createFileRoute('/cart')({
  component: Cart,
  loader: () => {
    const order = orders[0]
    const orderItems = order.items.map(item => {
      const product = products.find(p => p.id === item.productId)
      return { ...item, product }
    })
    return { ...order, items: orderItems }
  }
})

function Cart() {
  const order = Route.useLoaderData()

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-10 lg:px-20">
      <div className="flex flex-wrap justify-between gap-4 items-center mb-8">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] dark:text-white min-w-72">Carrinho de Compras</h1>
        <Button variant="outline">Continuar Comprando</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-red-500/50 bg-red-50 dark:bg-red-900/20 p-5">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-red-600 dark:text-red-400" />
                <p className="text-red-800 dark:text-red-300 text-base font-bold leading-tight">Atenção</p>
              </div>
              <p className="text-red-700 dark:text-red-200 text-sm font-normal leading-normal">
                Alguns produtos neste carrinho são classificados como perigosos. Certifique-se de seguir todas as normas de segurança para manuseio e armazenamento. Verifique as restrições de envio para a sua região.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#dbe0e6] dark:border-white/10 bg-white dark:bg-background-dark/50">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Preço Unitário</TableHead>
                  <TableHead>Preço Total</TableHead>
                  <TableHead>Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.items.map(item => (
                  <TableRow key={item.productId}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img src={item.product.imageUrl} alt={item.product.name} className="h-12 w-12 object-cover rounded-lg" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{item.product.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">#{item.product.casNumber}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Input type="number" defaultValue={item.quantity} className="w-16" />
                    </TableCell>
                    <TableCell>R$ {item.unitPrice.toFixed(2)}</TableCell>
                    <TableCell>R$ {(item.quantity * item.unitPrice).toFixed(2)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-background-dark/50 rounded-lg border border-[#dbe0e6] dark:border-white/10 p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Resumo do Pedido</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <span>Subtotal</span>
                <span>R$ {order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <span>Frete</span>
                <span className="text-xs">A calcular no checkout</span>
              </div>
              <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-4"></div>
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>R$ {order.total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="mt-6 w-full">Finalizar Compra</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
