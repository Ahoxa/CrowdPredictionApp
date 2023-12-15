"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const errorMessage: string = "Room number must be 3 digits";

const schema = z.object({
  roomNumber: z.string().regex(/^\d{3}$/, { message: errorMessage }),
});

const RoomNumForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormItem>
          <FormLabel htmlFor="roomNumber" className="mr-5 text-3xl">Room Number</FormLabel>
          <FormField
            control={form.control}
            name="roomNumber"
            render={({ field }) => (
              <input
                {...field}
                type="string"
                id="roomNumber"
                placeholder="123"
                className="border-2 border-gray-300 rounded-md w-20 h-10 text-center text-3xl"
              />
            )}
          />
          {form.formState.errors.roomNumber && (
            <FormMessage>{errorMessage}</FormMessage>
          )}
        </FormItem>
      </form>
    </Form>
  );
};

export default RoomNumForm;
