import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useQueryOptions, useRoleQueryOptions, createAnnouncement, getAnnouncementsQueryOptions, loadingCreateAnnouncementQueryOptions } from '@/lib/api'
import { Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose, DrawerFooter, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { useForm } from '@tanstack/react-form'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from "sonner"


export const Route = createFileRoute('/_authenticated/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  const roleQ = useQuery(useRoleQueryOptions);
  const role = roleQ?.data?.role[0];
  const { isPending, error, data } = useQuery(useQueryOptions);

  if (isPending) return "Loading..."
  if (error) return `Not logged in: ${error.message}`

  return (
    <div className="flex flex-col h-screen p-8 bg-black">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link className="flex items-center">
            <img
              alt="Avatar"
              className="rounded-full"
              height={40}
              src={data.user.picture!}
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
                filter: "grayscale(100%)",
              }}
              width={40}
            />
            <span className="text-white font-medium pl-5">My Profile</span>
          </Link>
          {role === "straff-perm" && (
            <CreateAnnouncementDrawer />
          )}
          <a href="https://discord.gg/yNhZDfR5yk">
          <Button
            className="text-sm text-[#fff] bg-[#6b5b95] hover:bg-[#8673b0] transition-colors px-4 py-2"
            variant="secondary"
          >
            Join Discord
          </Button>
        </a>
        </div>
        <a href="/api/logout">
          <Button
            className="text-sm text-[#ccc] bg-[#6b5b95] hover:bg-[#8673b0] transition-colors px-4 py-2"
            variant="secondary"
          >
            Logout
          </Button>
        </a>
      </div>
      <div className="flex-grow grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Link to="/badge">
          <Button className="text-4xl font-bold uppercase bg-white text-[#999] hover:bg-[#222] hover:text-[#ccc] transition-colors h-full w-full">
            Badge
          </Button>
        </Link>
        <Button className="text-4xl font-bold uppercase bg-white text-[#999] hover:bg-[#222] hover:text-[#ccc] transition-colors h-full">
          Live Stream
        </Button>
      </div>
    </div>
  );
}

function CreateAnnouncementDrawer() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      date: new Date().toISOString(),
    },
    onSubmit: async ({ value }) => {
      const existingAnnouncements = await queryClient.ensureQueryData(getAnnouncementsQueryOptions)

      navigate({to: '/announcements'})

      // loading state
      queryClient.setQueryData(loadingCreateAnnouncementQueryOptions.queryKey, {announcement: value})

      try {
        const newAnnouncement = await createAnnouncement({ value })
        
        queryClient.setQueryData(getAnnouncementsQueryOptions.queryKey, {
          ...existingAnnouncements,
          announcements: [newAnnouncement, ...existingAnnouncements.announcements]
        })

        toast("Announcement has been created", {
          description: `Successfully created announcement: ${newAnnouncement.title}`,
        })

      } catch (error) {
        toast("Error", {
          description: 'Failed to create announcement',
        })
        
      } finally {
        queryClient.setQueryData(loadingCreateAnnouncementQueryOptions.queryKey, {})
      }
      

    },
  })

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Create Announcement</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create Announcement</DrawerTitle>
          <DrawerDescription>Fill out the form to create a new announcement.</DrawerDescription>
        </DrawerHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
          className="space-y-4 px-4 py-6"
        >
          <form.Field
            name="title"
            children={(field) => (
              <div className="grid gap-2">
                <Label htmlFor={field.name}>Title</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Announcement Title"
                />
                {field.state.meta.touchedErrors ? (
                  <em>{field.state.meta.touchedErrors}</em>
                ) : null}
                {field.state.meta.isValidating ? 'Validating...' : null}
              </div>
            )}
          />

          <form.Field
            name="description"
            children={(field) => (
              <div className="grid gap-2">
                <Label htmlFor={field.name}>Description</Label>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="min-h-[100px]"
                  placeholder="Announcement Description"
                />
                {field.state.meta.touchedErrors ? (
                  <em>{field.state.meta.touchedErrors}</em>
                ) : null}
                {field.state.meta.isValidating ? 'Validating...' : null}
              </div>
            )}
          />

          <DrawerFooter>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <>
                  <Button className='mt-4' type="submit" disabled={!canSubmit}>
                    {isSubmitting ? '...' : 'Submit'}
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </>
              )}
            />
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
}

export default Dashboard;
