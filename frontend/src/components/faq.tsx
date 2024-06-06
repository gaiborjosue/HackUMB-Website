/**
* This code was partially generated by v0 by Vercel.
* @see https://v0.dev/t/7U1BdXUgTLH
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { CardContent, Card } from "@/components/ui/card"

export function faq() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="shadow-lg w-[550px]">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion className="w-full mt-4" collapsible="" type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:underline-none">
                What is a hackathon?
              </AccordionTrigger>
              <AccordionContent>A hackathon is an event, typically lasting several hours or days, where individuals and teams collaborate intensively on software and hardware projects. It's a creative forum for exploring new technologies, solving problems, and building innovative solutions.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:underline-none">
                Who can participate?
              </AccordionTrigger>
              <AccordionContent>
              The hackathon is open to all UMass Boston students, regardless of their major or year. It's an opportunity for students from various disciplines to come together and innovate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:underline-none">
              How much is the registration fee?
              </AccordionTrigger>
              <AccordionContent>
              Registration for the hackathon is completely free, thanks to the UMB Computer Science Club! Our aim is to make this event accessible to all interested students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:underline-none">
              Is the hackathon online or offline?
              </AccordionTrigger>
              <AccordionContent>
              It is in-person, at CC Ballroom Sections, however, we will stream the whole event at our discord stage 🙂
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="hover:underline-none">
              What is the prize money of the winning team?
              </AccordionTrigger>
              <AccordionContent>
              The winners of each track will receive a selection of prizes from our list, which for now, we are still preparing the list of prizes. Stay tuned for more information!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="hover:underline-none">
              What is the team size to participate in the Hackathon?
              </AccordionTrigger>
              <AccordionContent>
              Teams can have a maximum of 4. This size is ideal for promoting effective collaboration while ensuring each member can significantly contribute.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="hover:underline-none">
              What are the prerequisites considered for registering?
              </AccordionTrigger>
              <AccordionContent>
              There are no special prerequisites! Just be a UMB student, fill out the registration form, join our Discord server, and you're all set to participate in the hackathon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
