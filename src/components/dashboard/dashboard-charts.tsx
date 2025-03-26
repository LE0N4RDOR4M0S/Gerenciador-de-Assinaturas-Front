"use client"

import "src/globals.css"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePaymentStore } from "@/lib/stores/payment-store"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

export function DashboardCharts() {
  const { payments } = usePaymentStore()
  
  const monthNames = ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
  const currentYear = new Date().getFullYear()

  const revenueData = monthNames.map((month, index) => ({
    name: month,
    receita: payments
      .filter(payment => new Date(payment.date).getFullYear() === currentYear && new Date(payment.date).getMonth() === index)
      .reduce((sum, payment) => sum + payment.amount, 0)
  }))

  return (
    <Card title="Receita">
      <CardHeader>
        <CardTitle>Receita Mensal ({currentYear})</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <XAxis dataKey="name" stroke="var(--text-muted)" />
            <YAxis stroke="var(--text-muted)" />
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-muted)" />
            <Tooltip />
            <Line type="monotone" dataKey="receita" stroke="#4F46E5" strokeWidth={2} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
