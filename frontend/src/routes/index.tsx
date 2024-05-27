import { createFileRoute } from '@tanstack/react-router'
import { homefirst } from '@/components/homefirst'


export const Route = createFileRoute('/')({
  component: Index,
})


function Index() {
  return [homefirst()]
}

