import type React from "react"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Toaster from "@/components/ui/toaster"
import { AppProvider } from "@/lib/providers/app-provider"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>SubFlow</title>
        <meta name="description" content="Manage your subscriptions with ease" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <AppProvider>
            {children}
            <Toaster message={""} isOpen={false} onClose={function (): void {
              throw new Error("Function not implemented.")
            } } />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

