"use client";

import { useState } from "react";

import { useLanguage } from "@/hooks/LanguageContext";
import translations from "@/lib/translations.json";
import { Translations } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DialogFooter,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

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
  const { language } = useLanguage();

  const t = translations as Translations;
  let formItem = t[language].formItem;
  let confirm = t[language].confirm;
  let toastMessage = t[language].toast;
  let buttonText = t[language].button;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      roomNumber: "",
      numberOfPeople: "",
      time: "",
    },
  });

  const { toast } = useToast();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [roomNumber, setRoomNumber] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const onFormSubmit = (data: z.infer<typeof schema>) => {
    setRoomNumber(data.roomNumber);
    setNumberOfPeople(data.numberOfPeople);
    setTime(data.time);
    if (data.roomNumber && data.numberOfPeople && data.time) {
      setIsDialogOpen(true);
    }
  };

  const onDialogSubmit = () => {
    console.log({ roomNumber, numberOfPeople, time });
    setIsDialogOpen(false);
    toast({
      title: toastMessage.title,
      description: toastMessage.description,
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
                <div className="container">
                  <div className="flex items-center w-2/3 mx-auto mt-3">
                    <FormLabel
                      htmlFor="roomNumber"
                      className="mr-5 text-xl md:text-3xl whitespace-nowrap"
                    >
                      {formItem.roomNum}
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="roomNumber"
                        placeholder="123"
                        {...field}
                        className="text-lg md:text-2xl"
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-sm md:text-lg" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({ field }) => (
              <FormItem>
                <div className="container">
                  <div className="flex items-center w-2/3 mx-auto mt-3">
                    <FormLabel
                      htmlFor="numberOfPeople"
                      className="mr-5 text-xl md:text-3xl whitespace-nowrap"
                    >
                      {formItem.numOfPeople}
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="numberOfPeople"
                        placeholder="1"
                        {...field}
                        className="text-lg md:text-2xl"
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-sm md:text-lg" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <div className="container">
                  <div className="flex items-center w-2/3 mx-auto mt-3">
                    <FormLabel
                      htmlFor="visitingTime"
                      className="mr-5 text-xl md:text-3xl whitespace-nowrap"
                    >
                      {formItem.time}
                    </FormLabel>
                    <Select
                      name="visitingTime"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          id="visitingTime"
                          className="text-sm md:text-xl"
                        >
                          <SelectValue placeholder="Select your visiting time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="07:00-07:30">
                          07:00 ~ 07:30
                        </SelectItem>
                        <SelectItem value="07:30-08:00">
                          07:30 ~ 08:00
                        </SelectItem>
                        <SelectItem value="08:00-08:30">
                          08:00 ~ 08:30
                        </SelectItem>
                        <SelectItem value="08:30-09:00">
                          08:30 ~ 09:00
                        </SelectItem>
                        <SelectItem value="09:00-09:30">
                          09:00 ~ 09:30
                        </SelectItem>
                        <SelectItem value="09:30-10:00">
                          09:30 ~ 10:00
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage className="text-sm md:text-lg" />
                </div>
              </FormItem>
            )}
          />
          <div className="flex justify-center mt-3">
            <Button type="submit" variant="outline" size="sm">
              {buttonText.submit}
            </Button>
          </div>

          <Dialog open={isDialogOpen}>
            <DialogContent
              onInteractOutside={() => setIsDialogOpen(false)}
              className="sm:max-w-[425px]"
            >
              <DialogHeader>
                <DialogTitle>{confirm.title}</DialogTitle>
                <DialogDescription>{confirm.message}</DialogDescription>
              </DialogHeader>
              <button
                className="absolute right-4 top-4 bg-transparent border-none p-1"
                aria-label="Close Dialog"
              >
                <X
                  className="h-4 w-4 text-current"
                  onClick={() => {
                    setIsDialogOpen(false);
                  }}
                />
              </button>
              <div className="container">
                <div className="flex mb-2">
                  <p className="font-bold mr-3">{formItem.numOfPeople}</p>
                  <p>{roomNumber}</p>
                </div>
                <div className="flex mb-2">
                  <p className="font-bold mr-3">{formItem.roomNum}</p>
                  <p>{numberOfPeople}</p>
                </div>
                <div className="flex mb-2">
                  <p className="font-bold mr-3">{formItem.time}</p>
                  <p>{time}</p>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={onDialogSubmit}>{buttonText.save}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
      <Toaster />
    </>
  );
}
