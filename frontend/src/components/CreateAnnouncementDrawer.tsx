import { Button } from "@/components/ui/button"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose, DrawerFooter, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"

import { useForm } from '@tanstack/react-form'
import { api } from "@/lib/api"
import { useNavigate } from '@tanstack/react-router'
import { Description } from "@radix-ui/react-dialog"

export default function Component() {
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      const res = await api.announcements.$post({ json: value })
      if (!res.ok) {
        throw new Error("Failed to create expense")
      }
      navigate({ to: '/dashboard' })
    },
  })

  return (
    <Drawer defaultOpen>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }} className='max-w-xl m-auto'
      >
        <DrawerTrigger asChild>
          <Button>Create Announcement</Button>

        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create Announcement</DrawerTitle>
            <DrawerDescription>Fill out the form to create a new announcement.</DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 px-4 py-6">
            <div className="grid gap-2">
              <form.Field
                name="title"
                children={(field) => (
                  <>
                    <Label htmlFor={field.name}>Title</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      placeholder="Announcement Title"
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.touchedErrors ? (
                      <em>{field.state.meta.touchedErrors}</em>
                    ) : null}
                    {field.state.meta.isValidating ? 'Validating...' : null}
                  </>
                )}
              />
            </div>
            <div className="grid gap-2">
              <form.Field
                name="description"
                children={(field) => (
                  <>
                    <Label htmlFor={field.name}>Description</Label>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      placeholder="Announcement Description"
                      className="min-h-[100px]"
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.touchedErrors ? (
                      <em>{field.state.meta.touchedErrors}</em>
                    ) : null}
                    {field.state.meta.isValidating ? 'Validating...' : null}
                  </>
                )}
              />
            </div>

            <div className="flex items-center gap-2">
              <Toggle aria-label="Post to Discord" />
              <Label className="text-sm font-medium" htmlFor="discord">
                Post to Discord
              </Label>
            </div>
          </div>
          <DrawerFooter>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button className='mt-4' type="submit" disabled={!canSubmit}>
                  {isSubmitting ? '...' : 'Create Announcement'}
                </Button>
              )}
            />
          
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </form>
    </Drawer>

  )
}