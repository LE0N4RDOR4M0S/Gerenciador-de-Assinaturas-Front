import "src/globals.css"
import { DashboardCards } from "@/components/dashboard/dashboard-cards"
import { DashboardCharts } from "@/components/dashboard/dashboard-charts"
import { DashboardUpcomingPayments } from "@/components/dashboard/dashboard-upcoming-payments"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <DashboardCards />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <DashboardCharts className="lg:col-span-4" />
            <DashboardUpcomingPayments className="lg:col-span-3" />
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Analytics content would go here */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Analytics Content</h3>
              <p className="text-sm text-muted-foreground">This tab is not implemented in the demo.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Reports content would go here */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Reports Content</h3>
              <p className="text-sm text-muted-foreground">This tab is not implemented in the demo.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

