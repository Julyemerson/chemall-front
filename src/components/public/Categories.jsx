import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import products from '@/data/products.json'

export function Categories() {
  const categories = [...new Set(products.map(product => product.category))]

  return (
    <div className="px-4 py-16">
      <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 text-center">Nossas Principais Categorias</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 p-4">
        {categories.map(category => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
              <CardDescription>Uma ampla gama de {category.toLowerCase()} para diversas aplicações.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
