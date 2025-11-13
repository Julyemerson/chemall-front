import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import products from '@/data/products.json'
import { Link } from '@tanstack/react-router'

export function ProductTable() {
  return (
    <div className="px-4 py-3">
      <div className="flex overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do Produto</TableHead>
              <TableHead>Nº CAS</TableHead>
              <TableHead>Fórmula Química</TableHead>
              <TableHead>Pureza/Grau</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Link to="/products/$productId" params={{ productId: product.id }}>
                    {product.name}
                  </Link>
                </TableCell>
                <TableCell>{product.casNumber}</TableCell>
                <TableCell>{product.chemicalFormula}</TableCell>
                <TableCell>{product.purityGrade}</TableCell>
                <TableCell>
                  <Button variant="link">{product.price}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
