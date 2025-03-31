import Link from "next/link"
import { Users, Briefcase, Shield, Home, HeartPulse, FileText } from "lucide-react"

export const practiceAreas = [
  {
    id: "derecho-familiar",
    icon: <Users size={24} />,
    title: "Derecho Familiar",
    description: "Divorcio, custodia de menores, adopción y otros asuntos legales relacionados con la familia.",
  },
  {
    id: "derecho-corporativo",
    icon: <Briefcase size={24} />,
    title: "Derecho Corporativo",
    description: "Formación de empresas, contratos, fusiones y adquisiciones, y gobierno corporativo.",
  },
  {
    id: "derecho-laboral",
    icon: <Shield size={24} />,
    title: "Defensa Penal",
    description: "Representación para delitos menores, delitos graves y cargos penales federales.",
  },
]

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Nuestras Áreas de Práctica</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios legales integrales en una amplia gama de áreas de práctica para satisfacer sus
            necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Link
              key={area.id}
              href={`/areas-practica/${area.id}`}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all hover:bg-gray-100 group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1a365d]/10 text-[#1a365d] mb-4 group-hover:bg-[#1a365d]/20">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <span className="text-[#1a365d] font-medium inline-flex items-center">
                Leer más
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1a365d] hover:bg-[#2a4a7d] text-white font-medium rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            Consulte su Caso con Nosotros
          </a>
        </div>
      </div>
    </section>
  )
}

