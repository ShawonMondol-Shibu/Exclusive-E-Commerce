import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'
import React from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <main>
          <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* shadcn/ui Breadcrumb + Welcome */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>My Account</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="text-sm text-gray-600 text-right sm:text-left">
            Welcome! <span className="text-red-600 font-medium">Md Rimel</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <h2 className="font-medium text-lg mb-6 text-gray-800">Manage My Account</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="text-red-600 font-medium">My Profile</li>
              <li className="hover:text-red-600 cursor-pointer transition">Address Book</li>
              <li className="hover:text-red-600 cursor-pointer transition">My Payment Options</li>
            </ul>

            <h2 className="font-medium text-lg mt-10 mb-6 text-gray-800">My Orders</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="hover:text-red-600 cursor-pointer transition">My Returns</li>
              <li className="hover:text-red-600 cursor-pointer transition">My Cancellations</li>
            </ul>

            <h2 className="font-medium text-lg mt-10 mb-6 text-gray-800">My WishList</h2>
          </aside>

      {children}

          </div>
          </div>
          </div>
      </main>
  )
}
