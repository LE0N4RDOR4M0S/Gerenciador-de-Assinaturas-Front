"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Button from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Input from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/stores/auth-store"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export function LoginForm() {
  const router = useRouter()
  const login = useAuthStore((state) => state.login)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values.email)
    router.push("/dashboard")
  }

  return (
    <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
      <FormField control={form.control} name="email">
        {({ value, onChange }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="seu.email@example.com" value={value} onChange={onChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      </FormField>
      <FormField control={form.control} name="password">
        {({ value, onChange }) => (
          <FormItem>
            <FormLabel>Senha</FormLabel>
            <FormControl>
              <Input placeholder="********" value={value} onChange={onChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      </FormField>
        <Button type="submit">
          Login
        </Button>
    </Form>


  )
}
