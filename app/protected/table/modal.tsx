"use client"

import * as React from "react";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CardWithFormProps {
  onClose: () => void;
}

export function CardWithForm({ onClose }: CardWithFormProps) {
  const [date, setDate] = React.useState<Date>()

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add Job Post</CardTitle>
        <CardDescription>Add Info about your job application here!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Job Title</Label>
              <Input id="name" placeholder="Title..." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">URL reference</Label>
              <Input id="name" placeholder="URL..." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Company Name</Label>
              <Input id="name" placeholder="Name..." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Location</Label>
              <Input id="name" placeholder="Location..." />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Date Applied</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                            >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" style={{ zIndex: 9999, }}>
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        />
                    </PopoverContent>
                    </Popover>
                </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Status</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" style={{ zIndex: 9999, }}>
                  <SelectItem value="next">Applying</SelectItem>
                  <SelectItem value="sveltekit">Applied</SelectItem>
                  <SelectItem value="astro">Interviewing</SelectItem>
                  <SelectItem value="nuxt">Accepted</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button>Add</Button>
      </CardFooter>

    </Card>
  );
}
