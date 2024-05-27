import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Academic Information</h1>
          <p className="text-gray-500 dark:text-gray-400">Please provide your academic details.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
          <form className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Track</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <RadioGroup>
                    <RadioGroupItem className="peer sr-only" id="undergrad" name="track" value="undergrad" />
                    <Label className="flex cursor-pointer items-center space-x-4" htmlFor="undergrad">
                      <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-colors peer-checked:border-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:peer-checked:border-gray-50">
                        <div className="h-3 w-3 rounded-full bg-transparent transition-colors peer-checked:bg-gray-900 dark:peer-checked:bg-gray-50" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-50">Undergrad</span>
                    </Label>
                  </RadioGroup>
                </div>
                <div className="flex items-center">
                  <RadioGroup>
                    <RadioGroupItem className="peer sr-only" id="grad" name="track" value="grad" />
                    <Label className="flex cursor-pointer items-center space-x-4" htmlFor="grad">
                      <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-colors peer-checked:border-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:peer-checked:border-gray-50">
                        <div className="h-3 w-3 rounded-full bg-transparent transition-colors peer-checked:bg-gray-900 dark:peer-checked:bg-gray-50" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-50">Grad</span>
                    </Label>
                  </RadioGroup>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Semester</h2>
              <div className="mt-4">
                <Select>
                  <SelectTrigger id="semester">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fall-2024">Fall 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Team</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <RadioGroup>
                    <RadioGroupItem className="peer sr-only" id="team" name="team" value="team" />
                    <Label className="flex cursor-pointer items-center space-x-4" htmlFor="team">
                      <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-colors peer-checked:border-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:peer-checked:border-gray-50">
                        <div className="h-3 w-3 rounded-full bg-transparent transition-colors peer-checked:bg-gray-900 dark:peer-checked:bg-gray-50" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-50">Team</span>
                    </Label>
                  </RadioGroup>
                </div>
                <div className="flex items-center">
                  <RadioGroup>
                    <RadioGroupItem className="peer sr-only" id="no-team" name="team" value="no-team" />
                    <Label className="flex cursor-pointer items-center space-x-4" htmlFor="no-team">
                      <div className="h-5 w-5 rounded-full border border-gray-300 bg-white transition-colors peer-checked:border-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:peer-checked:border-gray-50">
                        <div className="h-3 w-3 rounded-full bg-transparent transition-colors peer-checked:bg-gray-900 dark:peer-checked:bg-gray-50" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-50">No Team</span>
                    </Label>
                  </RadioGroup>
                </div>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
      )
    }