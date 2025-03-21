"use client"

import Button from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Input from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useSubscriptionStore } from "@/lib/stores/subscription-store"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function SubscriptionsList() {
  const router = useRouter()
  const { subscriptions, cancelSubscription, activateSubscription } = useSubscriptionStore()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSubscriptions = subscriptions.filter(
    (subscription) =>
      subscription.planName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subscription.customerName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  function formatDate(dateString: string) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(dateString))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Subscriptions</CardTitle>
        <CardDescription>
          You have {subscriptions.length} total subscriptions,{" "}
          {subscriptions.filter((s) => s.status === "active").length} active
        </CardDescription>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search subscriptions..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Next Billing</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscriptions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No subscriptions found
                </TableCell>
              </TableRow>
            ) : (
              filteredSubscriptions.map((subscription) => (
                <TableRow key={subscription.id}>
                  <TableCell className="font-medium">{subscription.customerName}</TableCell>
                  <TableCell>{subscription.planName}</TableCell>
                  <TableCell>
                    ${subscription.price.toFixed(2)}/{subscription.billingCycle}
                  </TableCell>
                  <TableCell>{formatDate(subscription.startDate)}</TableCell>
                  <TableCell>{formatDate(subscription.nextBillingDate)}</TableCell>
                  <TableCell>
                    <Badge variant={subscription.status === "active" ? "default" : "destructive"}>
                      {subscription.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => router.push(`/subscriptions/${subscription.id}`)}>
                          View details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push(`/subscriptions/${subscription.id}/edit`)}>
                          Edit subscription
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {subscription.status === "active" ? (
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => cancelSubscription(subscription.id)}
                          >
                            Cancel subscription
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => activateSubscription(subscription.id)}>
                            Reactivate subscription
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

