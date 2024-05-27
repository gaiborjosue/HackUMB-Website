import { createFileRoute } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getAnnouncementsQueryOptions, loadingCreateAnnouncementQueryOptions, deleteAnnouncement, useRoleQueryOptions } from '@/lib/api'
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { toast } from "sonner"

export const Route = createFileRoute('/_authenticated/announcements')({
  component: Announcements,
})


function Announcements() {
  const roleQ = useQuery(useRoleQueryOptions);
  const role = roleQ?.data?.role[0];
  const { data, error, isPending } = useQuery(getAnnouncementsQueryOptions)

  const { data: loadingCreateAnnouncement } = useQuery(loadingCreateAnnouncementQueryOptions)

  if (error) return <div>Error: {error.message}</div>

  return (
    <main className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Staff Announcements</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Stay up-to-date with the latest news and updates from the team.
          </p>
        </div>
        <div className="grid gap-6">
          {loadingCreateAnnouncement?.announcement && (
            <Card>
              <CardHeader>
                <CardTitle className="text-white">{loadingCreateAnnouncement?.announcement.title}<Skeleton className='h-4 w-8' /></CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  {loadingCreateAnnouncement?.announcement.description}
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-gray-500 dark:text-gray-400"><Skeleton className="h-4 w-1/3" /></div>
              </CardFooter>
            </Card>
          )}
          {isPending ? Array(3).fill(0).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle><Skeleton className="h-6 w-1/2" />
                  <Skeleton className='h-4 w-4' />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-gray-500 dark:text-gray-400"><Skeleton className="h-4 w-1/3" /></div>
              </CardFooter>
            </Card>
          )) : data?.announcements.map((announcement) => (
            <Card key={announcement.id}>
              <CardHeader>
                <CardTitle className="text-white">{announcement.title}</CardTitle>
                {role === "straff-perm" && (<AnnouncementDeleteButton id={announcement.id} />)}
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  {announcement.description}
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Posted {announcement.createdAt ? new Date(announcement.createdAt).toLocaleDateString() : 'Unknown date'}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

function AnnouncementDeleteButton({id}: {id: number}) {

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteAnnouncement,
    onError: () => {
      toast("Error", {
        description: `Failed to delete announcement: ${id}`,
      }
      )
    },
    onSuccess: () => {
      toast("Announcement deleted", {
        description: `Successfully deleted announcement: ${id}`,
      })

      queryClient.setQueryData(getAnnouncementsQueryOptions.queryKey, (existingAnnouncements) => ({
        ...existingAnnouncements,
        announcements: existingAnnouncements!.announcements.filter((announcement) => announcement.id !== id)
      })
      )
    }
  })
  

  
  return (
    <Button disabled={mutation.isPending} onClick={() => mutation.mutate({ id })} variant="outline" size="icon">
      {mutation.isPending ? "...": <Trash className="h-4 w-8" />}
    </Button>
  )
}