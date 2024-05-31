import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from '@tanstack/react-router'

import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { api } from '@/lib/api'

const formSchema = z.object({
  track: z.enum(["Undergrad", "Grad"]),
  semester: z.string().min(1, {
    message: "Semester is required.",
  }),
  team: z.enum(["team", "no-team"]),
})

export function RegistrationForm() {
  const navigate = useNavigate()

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      track: "Undergrad",
      semester: "Fall 2024",
      team: "no-team",
    },
  })

  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await api.registration.$post({ json: values })
      if (res.ok) {
        navigate({ to: '/dashboard' })
      } else {
        console.error("Failed to complete registration")
      }
    } catch (error) {
      console.error("Failed to complete registration", error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="track"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Track</FormLabel>
              <FormControl>
                <RadioGroup {...field}>
                  <RadioGroupItem value="Undergrad" id="undergrad">
                    <Label htmlFor="undergrad">Undergrad</Label>
                  </RadioGroupItem>
                  <RadioGroupItem value="Grad" id="grad">
                    <Label htmlFor="grad">Grad</Label>
                  </RadioGroupItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="semester"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Semester</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fall 2024">Fall 2024</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="team"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team</FormLabel>
              <FormControl>
                <RadioGroup {...field}>
                  <RadioGroupItem value="team" id="team">
                    <Label htmlFor="team">Team</Label>
                  </RadioGroupItem>
                  <RadioGroupItem value="no-team" id="no-team">
                    <Label htmlFor="no-team">No Team</Label>
                  </RadioGroupItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}