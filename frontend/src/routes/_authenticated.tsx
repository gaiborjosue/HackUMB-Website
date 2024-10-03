import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useQueryOptions } from '@/lib/api'
import { Button } from '@/components/ui/button'

const Login = () => {

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-white to-black px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-50">Welcome to HackUMB</h2>
            <p className="mt-2 text-center text-sm text-white">Please log in or sign up to be part of our next hackathon!</p>
          </div>
          <div className="space-y-4">
            <a
              href="/api/login"
              className="flex w-full justify-center rounded-md bg-gray-50 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
                <Button className='bg-transparent hover:bg-transparent'>Log In</Button>
            </a>

            <a
              href="/api/register"
              className="flex w-full justify-center rounded-md bg-gray-50 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <Button className="bg-transparent hover:bg-transparent">Sign Up</Button>
            </a>
          </div>
        </div>
      </div>
    </>

  )
}


const Component = () => {
  const { user } = Route.useRouteContext();
  if (!user) {
    return <Login />;
  }
  return <Outlet />;
}



// src/routes/_authenticated.tsx
export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient

    try {
      const data = await queryClient.fetchQuery(useQueryOptions)
      return data
    } catch (error) {
      return { user: null }
    }
  },
  component: Component,
})

