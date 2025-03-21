import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Payment {
  id: string
  customerName: string
  customerEmail: string
  subscriptionId?: string
  description: string
  amount: number
  date: string
  dueDate: string
  status: "paid" | "pending" | "failed"
}

interface PaymentState {
  payments: Payment[]
  init: (payments: Payment[]) => void
  addPayment: (payment: Payment) => void
  updatePayment: (id: string, payment: Partial<Payment>) => void
  markAsPaid: (id: string) => void
  markAsFailed: (id: string) => void
}

export const usePaymentStore = create<PaymentState>()(
  persist(
    (set) => ({
      payments: [],
      init: (payments) => set({ payments }),
      addPayment: (payment) =>
        set((state) => ({
          payments: [...state.payments, payment],
        })),
      updatePayment: (id, updatedPayment) =>
        set((state) => ({
          payments: state.payments.map((payment) => (payment.id === id ? { ...payment, ...updatedPayment } : payment)),
        })),
      markAsPaid: (id) =>
        set((state) => ({
          payments: state.payments.map((payment) => (payment.id === id ? { ...payment, status: "paid" } : payment)),
        })),
      markAsFailed: (id) =>
        set((state) => ({
          payments: state.payments.map((payment) => (payment.id === id ? { ...payment, status: "failed" } : payment)),
        })),
    }),
    {
      name: "payment-storage",
    },
  ),
)

