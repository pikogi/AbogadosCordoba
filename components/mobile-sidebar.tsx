"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { practiceAreas } from "@/components/practice-areas"

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:col-span-1 order-1 lg:order-1">
      {/* Botón de menú móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4"
      >
        <span className="font-bold text-[#1a365d]">Áreas de Práctica</span>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Contenido de la barra lateral - visible en escritorio o cuando se abre en móvil */}
      <div className={`bg-white rounded-lg shadow-md p-6 ${isOpen ? "block" : "hidden"} lg:block sticky top-8`}>
        <h3 className="text-xl font-bold text-[#1a365d] mb-4 lg:block hidden">Áreas de Práctica</h3>
        <ul className="space-y-2">
          {practiceAreas.map((area) => (
            <li key={area.id}>
              <Link
                href={`/areas-practica/${area.id}`}
                className="block py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {area.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-[#1a365d] mb-3">¿Necesita ayuda?</h4>
          <p className="text-sm text-gray-600 mb-4">Contáctenos para una consulta gratuita sobre su caso.</p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

