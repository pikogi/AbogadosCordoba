import { Building, Scale, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Sobre Nuestra Firma</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Con más de 10 años de experiencia, nuestro bufete de abogados ha estado proporcionando servicios legales
            excepcionales a individuos y empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a365d]/10 text-[#1a365d] mb-4">
              <Building size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experiencia Establecida</h3>
            <p className="text-gray-600">
              Fundada en 2015, nuestra firma aporta décadas de experiencia combinada a cada caso que manejamos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a365d]/10 text-[#1a365d] mb-4">
              <Scale size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enfoque Centrado en el Cliente</h3>
            <p className="text-gray-600">
              Priorizamos entender sus necesidades únicas para ofrecer soluciones legales personalizadas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a365d]/10 text-[#1a365d] mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Flexibles</h3>
            <p className="text-gray-600">
              Nuestros abogados trabajan en pos de sus necesidades y no al reves.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 mb-4">
                Estamos comprometidos a proporcionar representación legal excepcional mientras mantenemos los más altos
                estándares de ética y responsabilidad profesional.
              </p>
              <p className="text-gray-600">
                Nuestro objetivo es construir relaciones duraderas con nuestros clientes ofreciendo soluciones prácticas
                a desafíos legales complejos y asegurando que cada cliente reciba atención personalizada.
              </p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="images/Abogado2.jpg"
                alt="Oficina del bufete de abogados"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

