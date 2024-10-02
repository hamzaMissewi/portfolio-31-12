import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormFieldProvider,
  FormItemProvider,
} from "@/context/Form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {Resolver} from "react-hook-form/dist/types/resolvers";

// Zod is a TypeScript-first schema validation library that is often used to validate and parse data in web applications. It provides a robust and type-safe way to define schemas for various types of data, such as forms, API responses, and other user inputs. Here’s how Zod can be beneficial in a Next.js application:
const formSchema = z.object({
  input: z.string().min(2).max(50),
});

function SearchInput() {
  const router = useRouter();

  // 1. Define your form.
  // const form = useForm<z.infer<typeof formSchema>>({
  const form = useForm({
    resolver: undefined, //zodResolver(formSchema),
    defaultValues: { input: "" },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("search movies values ", values);
    router.push(`/search/${values.input}`);
    // router.push(`/search/${form.watch("input")}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white dark:bg-white"
      >
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
      </form>
    </Form>
  );
}

export default SearchInput;
