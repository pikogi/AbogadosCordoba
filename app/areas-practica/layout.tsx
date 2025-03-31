import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { MobileSidebar } from "@/components/mobile-sidebar"

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#1a365d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/#practice-areas" className="hover:underline">
              Áreas de Práctica
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Detalle</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - Ahora primero en móviles */}
          <div className="lg:col-span-3 order-2 lg:order-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">{children}</div>
          </div>

          {/* Sidebar - Ahora con menú desplegable en móviles */}
          <MobileSidebar />
        </div>
      </div>
    </div>
  )
}

