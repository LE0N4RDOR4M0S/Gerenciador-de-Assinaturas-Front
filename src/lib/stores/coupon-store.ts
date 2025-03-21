import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Coupon {
  id: string
  code: string
  description: string
  discountType: "percentage" | "fixed"
  discountValue: number
  validFrom: string
  validUntil: string
  active: boolean
  usageLimit?: number
  usageCount: number
}

interface CouponState {
  coupons: Coupon[]
  init: (coupons: Coupon[]) => void
  addCoupon: (coupon: Coupon) => void
  updateCoupon: (id: string, coupon: Partial<Coupon>) => void
  deactivateCoupon: (id: string) => void
  activateCoupon: (id: string) => void
  incrementUsage: (id: string) => void
}

export const useCouponStore = create<CouponState>()(
  persist(
    (set) => ({
      coupons: [],
      init: (coupons) => set({ coupons }),
      addCoupon: (coupon) =>
        set((state) => ({
          coupons: [...state.coupons, coupon],
        })),
      updateCoupon: (id, updatedCoupon) =>
        set((state) => ({
          coupons: state.coupons.map((coupon) => (coupon.id === id ? { ...coupon, ...updatedCoupon } : coupon)),
        })),
      deactivateCoupon: (id) =>
        set((state) => ({
          coupons: state.coupons.map((coupon) => (coupon.id === id ? { ...coupon, active: false } : coupon)),
        })),
      activateCoupon: (id) =>
        set((state) => ({
          coupons: state.coupons.map((coupon) => (coupon.id === id ? { ...coupon, active: true } : coupon)),
        })),
      incrementUsage: (id) =>
        set((state) => ({
          coupons: state.coupons.map((coupon) =>
            coupon.id === id ? { ...coupon, usageCount: coupon.usageCount + 1 } : coupon,
          ),
        })),
    }),
    {
      name: "coupon-storage",
    },
  ),
)

