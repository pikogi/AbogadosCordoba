export function TeamSection() {
  const attorneys = [
    {
      name: "Carlos Bertarelli",
      title: "Director",
      specialty: "Derecho Corporativo",
      image: "/images/carlos.jpg",
    },
    {
      name: "Michael Chen",
      title: "Socio Senior",
      specialty: "Defensa Penal",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sarah Johnson",
      title: "Socia",
      specialty: "Derecho Familiar",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Nuestro Equipo Legal</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conozca a nuestros abogados experimentados que están dedicados a proporcionar representación legal
            excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square">
                <img
                  src={attorney.image || "/placeholder.svg"}
                  alt={attorney.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1">{attorney.name}</h3>
                <p className="text-[#1a365d] font-medium">{attorney.title}</p>
                <p className="text-gray-500 text-sm">{attorney.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Únase a Nuestro Equipo</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Siempre estamos buscando abogados talentosos y profesionales legales para unirse a nuestra práctica en
            crecimiento.
          </p>
          <a
            href="#careers"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#1a365d] text-base font-medium rounded-md text-[#1a365d] hover:bg-[#1a365d]/5"
          >
            Ver Posiciones Abiertas
          </a>
        </div>
      </div>
    </section>
  )
}

