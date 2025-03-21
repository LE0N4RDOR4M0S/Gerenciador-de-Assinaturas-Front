"use client"

import type React from "react"

import { useEffect } from "react"
import { useAuthStore } from "@/lib/stores/auth-store"
import { useSubscriptionStore } from "@/lib/stores/subscription-store"
import { usePaymentStore } from "@/lib/stores/payment-store"
import { useCouponStore } from "@/lib/stores/coupon-store"
import { useNotificationStore } from "@/lib/stores/notification-store"
import { generateMockData } from "@/lib/mock-data"

export function AppProvider({ children }: { children: React.ReactNode }) {
  const initAuth = useAuthStore((state) => state.init)
  const initSubscriptions = useSubscriptionStore((state) => state.init)
  const initPayments = usePaymentStore((state) => state.init)
  const initCoupons = useCouponStore((state) => state.init)
  const initNotifications = useNotificationStore((state) => state.init)

  useEffect(() => {
    // Generate mock data for demo purposes
    const { subscriptions, payments, coupons, notifications } = generateMockData()

    // Initialize stores with mock data
    initAuth()
    initSubscriptions(subscriptions)
    initPayments(payments)
    initCoupons(coupons)
    initNotifications(notifications)
  }, [initAuth, initSubscriptions, initPayments, initCoupons, initNotifications])

  return <>{children}</>
}

