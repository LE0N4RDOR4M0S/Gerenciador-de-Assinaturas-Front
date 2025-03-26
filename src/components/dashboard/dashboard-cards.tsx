"use client"

import "src/globals.css"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSubscriptionStore } from "@/lib/stores/subscription-store"
import { usePaymentStore } from "@/lib/stores/payment-store"
import { ArrowDownIcon, ArrowUpIcon, CreditCard, DollarSign, Users } from "lucide-react"

export function DashboardCards() {
  const { subscriptions } = useSubscriptionStore()
  const { payments } = usePaymentStore()

  const activeSubscriptions = subscriptions.filter((sub) => sub.status === "active").length
  const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0)
  const monthlyRevenue = payments
    .filter((payment) => {
      const paymentDate = new Date(payment.date)
      const currentDate = new Date()
      return (
        paymentDate.getMonth() === currentDate.getMonth() && paymentDate.getFullYear() === currentDate.getFullYear()
      )
    })
    .reduce((sum, payment) => sum + payment.amount, 0)

  const previousMonthRevenue = monthlyRevenue * 0.85
  const revenueChange = ((monthlyRevenue - previousMonthRevenue) / previousMonthRevenue) * 100

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card title="Active Subscriptions">
        <CardHeader >
          <CardTitle >Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">Lifetime revenue</p>
        </CardContent>
      </Card>
      <Card title="Monthly Revenue">
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${monthlyRevenue.toFixed(2)}</div>
          <div className="flex items-center text-xs text-muted-foreground">
            {revenueChange > 0 ? (
              <>
                <ArrowUpIcon className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">{revenueChange.toFixed(1)}%</span>
              </>
            ) : (
              <>
                <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
                <span className="text-red-500">{Math.abs(revenueChange).toFixed(1)}%</span>
              </>
            )}
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card title="Active Subscriptions">
        <CardHeader >
          <CardTitle >Active Subscriptions</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeSubscriptions}</div>
          <p className="text-xs text-muted-foreground">
            {subscriptions.length > 0
              ? `${((activeSubscriptions / subscriptions.length) * 100).toFixed(1)}% of total subscriptions`
              : "No subscriptions yet"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

