import { CouponsList } from "@/components/coupons/coupons-list"
import Button from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

export default function CouponsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Promotional Coupons</h1>
        <Button>
          <Link href="/coupons/new">
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Coupon
          </Link>
        </Button>
      </div>
      <CouponsList />
    </div>
  )
}

