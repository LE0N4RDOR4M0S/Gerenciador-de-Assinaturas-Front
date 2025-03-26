import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { maxHeaderSize } from "http"
import { Maximize } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <Image 
          src="/placeholder.jpg" 
          alt="login" 
          fill
          className="object-cover" 
        />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <footer className="text-sm">Desenvolvido por Leonardo Ramos</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Bem vindo de volta</h1>
            <p className="text-sm text-muted-foreground">Entre com suas credenciais</p>
          </div>
            <Card title="Login">
            <CardContent>
              <LoginForm />
            </CardContent>
            </Card>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link href="/register" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

