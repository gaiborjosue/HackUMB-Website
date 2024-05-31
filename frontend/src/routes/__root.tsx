import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { type QueryClient } from '@tanstack/react-query'
import { Toaster } from "@/components/ui/sonner"


interface MyRouterContext {
  queryClient: QueryClient
}


export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
})


function NavBar() {

  return (
    <header className="flex h-16 w-full items-center justify-between px-7 md:px-6">
      <nav className="flex-1 justify-center md:flex">
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link className="[&.active]:font-bold hover:underline hover:underline-offset-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="[&.active]:font-bold hover:underline hover:underline-offset-4" to="/announcements">
              Announcements
            </Link>
          </li>
          <li>
            <Link className="[&.active]:font-bold hover:underline hover:underline-offset-4" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <a className="[&.active]:font-bold hover:underline hover:underline-offset-4" target="_blank" href="https://discord.gg/yNhZDfR5yk">
              Discord
            </a>
          </li>
        </ul>
      </nav>
      
    </header>
    
  )
}

function Root() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Toaster />
    </>
  )
}