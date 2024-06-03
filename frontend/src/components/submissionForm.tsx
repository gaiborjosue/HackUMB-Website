import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function submissionForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Project Submission</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Submit your project for the hackathon.</p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="project-name">Project Name</Label>
            <Input id="project-name" placeholder="Enter project name" required type="text" />
          </div>
          <div>
            <Label htmlFor="team-members">Team Members</Label>
            <Input id="team-members" placeholder="Enter team members (comma separated)" required type="text" />
          </div>
          <div>
            <Label htmlFor="project-description">Project Description</Label>
            <Textarea id="project-description" placeholder="Enter project description" required rows={4} />
          </div>
          <div>
            <Label htmlFor="demo-link">Project Demo Link</Label>
            <Input id="demo-link" placeholder="Enter project demo link" required type="url" />
          </div>
          <div>
            <Label htmlFor="repo-link">Project Repository Link</Label>
            <Input id="repo-link" placeholder="Enter project repository link" required type="url" />
          </div>
          <Button className="w-full" type="submit">
            Submit Project
          </Button>
        </form>
      </div>
    </div>
  )
}
