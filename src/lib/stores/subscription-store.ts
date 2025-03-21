import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Subscription {
  id: string
  customerName: string
  customerEmail: string
  planName: string
  planId: string
  price: number
  billingCycle: "monthly" | "quarterly" | "yearly"
  startDate: string
  nextBillingDate: string
  status: "active" | "canceled" | "paused"
}

interface SubscriptionState {
  subscriptions: Subscription[]
  init: (subscriptions: Subscription[]) => void
  addSubscription: (subscription: Subscription) => void
  updateSubscription: (id: string, subscription: Partial<Subscription>) => void
  cancelSubscription: (id: string) => void
  activateSubscription: (id: string) => void
  pauseSubscription: (id: string) => void
}

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set) => ({
      subscriptions: [],
      init: (subscriptions) => set({ subscriptions }),
      addSubscription: (subscription) =>
        set((state) => ({
          subscriptions: [...state.subscriptions, subscription],
        })),
      updateSubscription: (id, updatedSubscription) =>
        set((state) => ({
          subscriptions: state.subscriptions.map((subscription) =>
            subscription.id === id ? { ...subscription, ...updatedSubscription } : subscription,
          ),
        })),
      cancelSubscription: (id) =>
        set((state) => ({
          subscriptions: state.subscriptions.map((subscription) =>
            subscription.id === id ? { ...subscription, status: "canceled" } : subscription,
          ),
        })),
      activateSubscription: (id) =>
        set((state) => ({
          subscriptions: state.subscriptions.map((subscription) =>
            subscription.id === id ? { ...subscription, status: "active" } : subscription,
          ),
        })),
      pauseSubscription: (id) =>
        set((state) => ({
          subscriptions: state.subscriptions.map((subscription) =>
            subscription.id === id ? { ...subscription, status: "paused" } : subscription,
          ),
        })),
    }),
    {
      name: "subscription-storage",
    },
  ),
)

