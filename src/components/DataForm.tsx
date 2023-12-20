"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

const roomErrorMessage: string = "Room number must be 3 digits.";
const peopleNumErrorMessage: string = "Please enter the number of people.";
const timeErrorMessage: string = "Please select your visiting time.";

const schema = z.object({
  roomNumber: z.string().regex(/^\d{3}$/, { message: roomErrorMessage }),
  numberOfPeople: z
    .string()
    .regex(/^\d{1,2}$/, { message: peopleNumErrorMessage }),
  time: z.string().nonempty({ message: timeErrorMessage }),
});

export default function DataForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      roomNumber: "",
      numberOfPeople: "",
      time: "",
    },
  });

  const { toast } = useToast();

  const [roomNumber, setRoomNumber] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const onFormSubmit = (data: z.infer<typeof schema>) => {
    setRoomNumber(data.roomNumber);
    setNumberOfPeople(data.numberOfPeople);
    setTime(data.time);
  };

  const onDialogSubmit = () => {
    console.log({ roomNumber, numberOfPeople, time });
    toast({
      title: "Submitted!",
      description: "Your information has been submitted.",
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFormSubmit)}>
          <FormField
            control={form.control}
            name="roomNumber"
            render={({ field }) => (
              <FormItem>
                <div className="flex my-3">
                  <FormLabel
                    htmlFor="roomNumber"
                    className="mr-5 text-3xl whitespace-nowrap"
                  >
                    Room Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="123" {...field} className="text-2xl" />
                  </FormControl>
                </div>
                <FormMessage className="text-lg" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({ field }) => (
              <FormItem>
                <div className="flex">
                  <FormLabel
                    htmlFor="numberOfPeople"
                    className="mr-5 mb-4 text-3xl whitespace-nowrap"
                  >
                    Number of People
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="1" {...field} className="text-2xl" />
                  </FormControl>
                </div>
                <FormMessage className="text-lg" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <div className="flex mb-3">
                  <FormLabel
                    htmlFor="visitingTime"
                    className="mr-5 text-3xl whitespace-nowrap"
                  >
                    Visiting Time
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-xl">
                        <SelectValue placeholder="Select your visiting time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="07:00-07:30">07:00 ~ 07:30</SelectItem>
                      <SelectItem value="07:30-08:00">07:30 ~ 08:00</SelectItem>
                      <SelectItem value="08:00-08:30">08:00 ~ 08:30</SelectItem>
                      <SelectItem value="08:30-09:00">08:30 ~ 09:00</SelectItem>
                      <SelectItem value="09:00-09:30">09:00 ~ 09:30</SelectItem>
                      <SelectItem value="09:30-10:00">09:30 ~ 10:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage className="text-lg" />
              </FormItem>
            )}
          />

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex justify-center">
                <Button type="submit" variant="outline" size="sm">
                  Submit
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Your Input</DialogTitle>
                <DialogDescription>
                  Below is the information you have entered. Is this correct?
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Room Number
                  </Label>
                  {roomNumber}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Number of People
                  </Label>
                  {numberOfPeople}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Visiting Time
                  </Label>
                  {time}
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button onClick={onDialogSubmit}>Save changes</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
      <Toaster />
    </>
  );
}
