import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  email: string
  name?: string
  password?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, name?: string, password?: string) => void
  logout: () => void
  init: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email, name, password) =>
        set({
          user: { email, name, password },
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
      init: () => {
        // Initialize with demo user if not already authenticated
        set((state) => {
          if (!state.isAuthenticated) {
            return {
              user: { email: "demo@example.com", name: "Demo User" },
              isAuthenticated: true,
            }
          }
          return state
        })
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)

