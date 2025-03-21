import { PaymentsList } from "@/components/payments/payments-list"
import Button from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <Button>
          <Link href="/payments/new">
            <PlusIcon className="mr-2 h-4 w-4" />
            Record Payment
          </Link>
        </Button>
      </div>
      <PaymentsList />
    </div>
  )
}

