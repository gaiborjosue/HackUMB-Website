import { createFileRoute } from '@tanstack/react-router'
import { api }  from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Skeleton } from '@/components/ui/skeleton'

export const Route = createFileRoute('/_authenticated/expenses')({
  component: Expenses,

})
async function getAllExpenses() {
  // await new Promise((r) => setTimeout(r, 1000));
  const result = await api.expenses.$get()
  if (!result.ok) {
    throw new Error("Failed to fetch total spent")
  }
  const data = await result.json()
  return data
}

function Expenses() {
  const { isPending, error, data } = useQuery({ queryKey: ['get-all-expenses'], queryFn: getAllExpenses })

  

  if (error) return `An error has occurred: ${error.message}`
  return <div className="p-2">
      <Table>
        <TableCaption>A list of all your expenses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPending ? Array(3).fill(0).map((_, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium"><Skeleton className="h-4" /></TableCell>
              <TableCell><Skeleton className="h-4 w-[250px]" /></TableCell>
              <TableCell><Skeleton className="h-4 w-[250px]" /></TableCell>
            </TableRow>
          ))
          : data?.expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">{expense.id}</TableCell>
              <TableCell>{expense.title}</TableCell>
              <TableCell>{expense.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
}
