import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/public/Hero'
import { Categories } from '@/components/public/Categories'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}
