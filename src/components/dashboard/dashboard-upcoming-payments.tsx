"use client"

import type React from "react"
import "src/globals.css"
import Button from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { usePaymentStore } from "@/lib/stores/payment-store"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { useRouter } from "next/navigation"

interface DashboardUpcomingPaymentsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardUpcomingPayments({ className, ...props }: DashboardUpcomingPaymentsProps) {
  const router = useRouter()
  const { payments } = usePaymentStore()

  // Get upcoming payments (future dates)
  const currentDate = new Date()
  const upcomingPayments = payments
    .filter((payment) => new Date(payment.dueDate) > currentDate)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5)

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  function getDaysUntil(dateString: string) {
    const dueDate = new Date(dateString)
    const currentDate = new Date()

    // Reset time part for accurate day calculation
    currentDate.setHours(0, 0, 0, 0)
    dueDate.setHours(0, 0, 0, 0)

    const diffTime = dueDate.getTime() - currentDate.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <Card className={cn("col-span-3", className)} {...props}>
      <CardHeader>
        <CardTitle>Upcoming Payments</CardTitle>
        <CardDescription>You have {upcomingPayments.length} upcoming payments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingPayments.length === 0 ? (
          <p className="text-sm text-muted-foreground">No upcoming payments</p>
        ) : (
          upcomingPayments.map((payment) => {
            const daysUntil = getDaysUntil(payment.dueDate)
            return (
              <div key={payment.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full p-2 bg-muted">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{payment.description}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(payment.dueDate)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">${payment.amount.toFixed(2)}</p>
                  <span
                    className={cn(
                      "text-xs rounded-full px-2 py-0.5",
                      daysUntil <= 3
                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        : daysUntil <= 7
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                    )}
                  >
                    {daysUntil} days
                  </span>
                </div>
              </div>
            )
          })
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => router.push("/payments")}>
          View all payments
        </Button>
      </CardFooter>
    </Card>
  )
}

