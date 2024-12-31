import React from "react";
import { useForm } from "react-hook-form";
import {
  Form as HookForm,
  FormControl,
  FormFieldProvider,
  FormItemProvider,
} from "@/context/Form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Form from "next/form";
// import { zodResolver } from "@hookform/resolvers/zod";

// Zod is a TypeScript-first schema validation library that is often used to validate and parse data in web applications. It provides a robust and type-safe way to define schemas for various types of data, such as forms, API responses, and other user inputs. Here’s how Zod can be beneficial in a Next.js application:
const formSchema = z.object({
  input: z.string().min(2).max(50),
});

export function SearchMoviesInput() {
  const router = useRouter();
  // const form = useForm<z.infer<typeof formSchema>>({
  const form = useForm({
    resolver: undefined, //zodResolver(formSchema),
    defaultValues: { input: "" },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/search/${values.input}`);
    // ✅ This will be type-safe and validated.
    router.push(`/search/${form.watch("input")}`);
  }

  return (
    <HookForm {...form}>
      <Form
        action={`/search/${form.watch("input")}`}
        className="space-y-8 bg-white dark:bg-white sm:mx-2 md:mx-4"
        style={{
          flexGrow: 1,
        }}
      >
        {/*<form*/}
        {/*  onSubmit={form.handleSubmit(onSubmit)}*/}
        {/*  className="space-y-8 bg-white dark:bg-white"*/}
        {/*>*/}
        <FormFieldProvider
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItemProvider>
              <FormControl>
                <Input placeholder="Search..." {...field} color={"gray"} />
              </FormControl>
            </FormItemProvider>
          )}
        />
      </Form>
    </HookForm>
  );
}
