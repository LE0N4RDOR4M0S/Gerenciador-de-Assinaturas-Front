"use client"

import type React from "react"
import "src/globals.css"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { usePaymentStore } from "@/lib/stores/payment-store"
import { useSubscriptionStore } from "@/lib/stores/subscription-store"
import { cn } from "@/lib/utils"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface DashboardChartsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardCharts({ className, ...props }: DashboardChartsProps) {
  const { payments } = usePaymentStore()
  const { subscriptions } = useSubscriptionStore()

  // Process data for revenue chart
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const currentYear = new Date().getFullYear()

  // Initialize data for all months
  const revenueData = monthNames.map((month) => ({
    name: month,
    revenue: 0,
    subscriptions: 0,
  }))

  // Fill in actual data
  payments.forEach((payment) => {
    const paymentDate = new Date(payment.date)
    if (paymentDate.getFullYear() === currentYear) {
      const monthIndex = paymentDate.getMonth()
      revenueData[monthIndex].revenue += payment.amount
    }
  })

  // Count subscriptions started per month
  subscriptions.forEach((subscription) => {
    const startDate = new Date(subscription.startDate)
    if (startDate.getFullYear() === currentYear) {
      const monthIndex = startDate.getMonth()
      revenueData[monthIndex].subscriptions += 1
    }
  })

  // Process data for plan distribution
  const planData = subscriptions.reduce(
    (acc, subscription) => {
      const planName = subscription.planName
      const existingPlan = acc.find((item) => item.name === planName)

      if (existingPlan) {
        existingPlan.value += 1
      } else {
        acc.push({ name: planName, value: 1 })
      }

      return acc
    },
    [] as { name: string; value: number }[],
  )

  return (
    <Card className={cn("col-span-4", className)} {...props}>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly revenue and subscription growth for {currentYear}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer
          config={{
            revenue: {
              label: "Revenue",
              color: "hsl(var(--chart-1))",
            },
            subscriptions: {
              label: "New Subscriptions",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="aspect-[4/3]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSubscriptions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-subscriptions)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-subscriptions)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <CartesianGrid strokeDasharray="3 3" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="revenue"
                yAxisId="left"
                stroke="var(--color-revenue)"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
              <Area
                type="monotone"
                dataKey="subscriptions"
                yAxisId="right"
                stroke="var(--color-subscriptions)"
                fillOpacity={1}
                fill="url(#colorSubscriptions)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

