import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { PublicLayout } from '@/components/public/PublicLayout'

export const Route = createRootRoute({
  component: () => (
    <>
      <PublicLayout />
      <TanStackRouterDevtools />
    </>
  ),
})
