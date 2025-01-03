'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { User, UserCircle, Users, UserPlus, UserCheck, Menu } from 'lucide-react'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const sidebarItems = [
  { name: 'Client 1', href: '/', icon: User },
  { name: 'Client 2', href: '/analytics', icon: User },
  { name: 'Client 3', href: '/customers', icon: User },
  { name: 'Client 4', href: '/settings', icon: User },
  { name: 'Client 5', href: '/help', icon: User },
]

export function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const SidebarContent = () => (
    <nav className="space-y-2">
      {sidebarItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`flex items-center space-x-2 rounded-lg px-3 py-2 text-white ${
            pathname === item.href ? 'bg-teal-300' : ''
          }`}
          onClick={() => setOpen(false)}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  )

  return (
    <>
      <div className="hidden w-64 bg-zinc-900 p-4 lg:block">
      <h1 className="text-xl items-center font-bold  text-teal-300 p-4">DASHBOARD</h1>
      <SidebarContent />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed left-4 top-4 z-50 lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-gray-100 p-4">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}

