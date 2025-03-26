import { SubscriptionsList } from "@/components/subscriptions/subscriptions-list"
import Button from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

export default function SubscriptionsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
        <Button>
          <Link href="/subscriptions/new">
            <PlusIcon/>New Subscription
          </Link>
        </Button>
      </div>
      <SubscriptionsList />
    </div>
  )
}

