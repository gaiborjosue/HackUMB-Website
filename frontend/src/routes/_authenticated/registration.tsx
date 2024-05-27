// pages/_authenticated/registration.tsx
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { api } from '@/lib/api';
import { toast } from 'sonner';

// Define the form schema using zod
const formSchema = z.object({
  track: z.enum(["Undergrad", "Grad"], {
    required_error: "Please select an academic track.",
  }),
  semester: z.enum(["fall-2024", "spring-2025", "summer-2025"], {
    required_error: "Please select a semester.",
  }),
  team: z.enum(["team", "no-team"]),
});

type FormData = z.infer<typeof formSchema>;

export const Route = createFileRoute('/_authenticated/registration')({
  component: Registration,
});

export default function Registration() {
  const navigate = useNavigate();

  // Initialize the form with react-hook-form and zodResolver
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      track: "Undergrad",
      semester: "fall-2024",
      team: "no-team",
    },
  });

  // Define the form submission handler
  const onSubmit = async (values: FormData) => {
    try {
      const res = await api.registration.$post({ json: values });
      if (!res.ok) {
        throw new Error("Failed to complete registration");
      }
      toast("Welcome!", {
        description: 'Successfully completed registration 🎉',
      })
      navigate({ to: '/dashboard' });
    } catch (error) {
      console.error("Error during registration:", error);
      toast("Error", {
        description: 'Failed to create registration.',
      })
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-black">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-black">
        <h2 className="mb-6 text-2xl font-bold">Finish your registration 😁</h2>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="track">Academic Track</Label>
            <Select id="track" {...form.register("track")}>
              <SelectTrigger>
                <SelectValue placeholder="Select track" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Undergrad">Undergrad 👶</SelectItem>
                <SelectItem value="Grad">Grad 🎓</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="semester">Semester you are participating in</Label>
            <Select id="semester" {...form.register("semester")}>
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fall-2024">Fall 2024 🍂</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="team">Are you on a Team?</Label>
            <Select id="team" {...form.register("team")}>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Have a Team ⭐</SelectItem>
                <SelectItem value="no-team">No team 🔍</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
