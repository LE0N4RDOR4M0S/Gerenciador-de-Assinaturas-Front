"use client"

import "src/globals.css"
import { cn } from "@/lib/utils"
import { CreditCard, LayoutDashboard, Package, Settings, Tag, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Assinaturas",
    href: "/subscriptions",
    icon: Package,
  },
  {
    title: "Pagamentos",
    href: "/payments",
    icon: CreditCard,
  },
  {
    title: "Cupons",
    href: "/coupons",
    icon: Tag,
  },
  {
    title: "Usuários",
    href: "/users",
    icon: Users,
  },
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background md:block">
      <div className="flex h-full flex-col gap-8">
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname === item.href && "bg-muted text-primary",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

