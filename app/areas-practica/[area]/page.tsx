import { notFound } from "next/navigation"
import Image from "next/image"
import { practiceAreas } from "@/components/practice-areas"

// Contenido detallado para cada área de práctica
const practiceAreasContent = {
  "derecho-familiar": {
    title: "Derecho Familiar",
    image: "/placeholder.svg?height=300&width=600",
    intro:
      "Nuestro equipo de abogados especializados en derecho familiar entiende que los asuntos familiares son delicados y requieren un enfoque compasivo pero efectivo.",
    content: [
      {
        subtitle: "Divorcio y Separación",
        text: "Ofrecemos representación legal completa en procesos de divorcio, ya sean contenciosos o de mutuo acuerdo. Nuestro enfoque se centra en proteger sus intereses y derechos, mientras buscamos soluciones que minimicen el impacto emocional y financiero en todas las partes involucradas.",
      },
      {
        subtitle: "Custodia de Menores",
        text: "La custodia de los hijos es uno de los aspectos más importantes y emocionalmente desafiantes en los casos de derecho familiar. Nuestros abogados trabajan incansablemente para proteger los mejores intereses de los niños mientras defendemos sus derechos como padre o madre.",
      },
      {
        subtitle: "Pensión Alimenticia",
        text: "Ayudamos a establecer, modificar o hacer cumplir órdenes de pensión alimenticia justas, asegurando que los niños reciban el apoyo financiero que necesitan y merecen.",
      },
      {
        subtitle: "Adopción",
        text: "Guiamos a las familias a través del complejo proceso de adopción, ayudándoles a navegar por los requisitos legales y procedimientos necesarios para dar la bienvenida a un nuevo miembro a su familia.",
      },
      {
        subtitle: "Violencia Doméstica",
        text: "Proporcionamos representación compasiva y efectiva para víctimas de violencia doméstica, ayudando a obtener órdenes de protección y otros recursos legales necesarios para garantizar su seguridad.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tiempo toma finalizar un divorcio?",
        answer:
          "El tiempo para finalizar un divorcio varía según la complejidad del caso y el nivel de cooperación entre las partes. Un divorcio de mutuo acuerdo puede resolverse en 3-6 meses, mientras que un divorcio contencioso puede tomar 1-2 años o más.",
      },
      {
        question: "¿Cómo se determina la custodia de los hijos?",
        answer:
          "Los tribunales determinan la custodia basándose principalmente en el mejor interés del niño. Factores como la relación del niño con cada padre, estabilidad del hogar, capacidad de los padres para satisfacer las necesidades del niño, y en algunos casos, las preferencias del propio niño, son considerados.",
      },
      {
        question: "¿Puedo modificar una orden de pensión alimenticia?",
        answer:
          "Sí, las órdenes de pensión alimenticia pueden modificarse si hay un cambio sustancial en las circunstancias, como pérdida de empleo, aumento significativo de ingresos, o cambios en las necesidades del niño.",
      },
    ],
  },
  "derecho-corporativo": {
    title: "Derecho Corporativo",
    image: "/placeholder.svg?height=300&width=600",
    intro:
      "Nuestro departamento de derecho corporativo ofrece asesoramiento legal integral para empresas de todos los tamaños, desde startups hasta corporaciones multinacionales.",
    content: [
      {
        subtitle: "Formación de Empresas",
        text: "Asesoramos en la elección de la estructura legal más adecuada para su negocio y gestionamos todo el proceso de constitución, incluyendo la redacción de estatutos, acuerdos de accionistas y otros documentos fundamentales.",
      },
      {
        subtitle: "Contratos Comerciales",
        text: "Redactamos, revisamos y negociamos todo tipo de contratos comerciales, asegurando que sus intereses estén protegidos y que los acuerdos cumplan con todas las regulaciones aplicables.",
      },
      {
        subtitle: "Fusiones y Adquisiciones",
        text: "Proporcionamos asesoramiento estratégico y legal en todas las etapas de las transacciones de fusiones y adquisiciones, desde la due diligence hasta el cierre, ayudando a maximizar el valor y minimizar los riesgos.",
      },
      {
        subtitle: "Gobierno Corporativo",
        text: "Ayudamos a establecer estructuras de gobierno corporativo sólidas que promuevan la transparencia, la responsabilidad y el cumplimiento normativo, protegiendo los intereses de accionistas, directores y ejecutivos.",
      },
      {
        subtitle: "Cumplimiento Normativo",
        text: "Asesoramos sobre las obligaciones legales y regulatorias aplicables a su negocio, desarrollando programas de cumplimiento efectivos para prevenir infracciones y mitigar riesgos.",
      },
    ],
    faq: [
      {
        question: "¿Qué estructura legal es mejor para mi negocio?",
        answer:
          "La estructura ideal (sociedad anónima, limitada, etc.) depende de factores como el tamaño del negocio, número de propietarios, responsabilidad deseada, consideraciones fiscales y planes de crecimiento. Nuestros abogados analizan su situación específica para recomendar la mejor opción.",
      },
      {
        question: "¿Cuánto tiempo toma constituir una empresa?",
        answer:
          "El tiempo varía según la jurisdicción y el tipo de entidad, pero generalmente puede tomar entre 2-4 semanas completar todos los trámites necesarios para la constitución formal de una empresa.",
      },
      {
        question: "¿Qué debo considerar antes de una fusión o adquisición?",
        answer:
          "Es crucial realizar una due diligence exhaustiva, evaluar sinergias potenciales, considerar implicaciones fiscales, analizar cuestiones de personal y cultura corporativa, y tener una estrategia clara de integración post-fusión.",
      },
    ],
  },
  "defensa-penal": {
    title: "Defensa Penal",
    image: "/placeholder.svg?height=300&width=600",
    intro:
      "Nuestro equipo de defensa penal está comprometido a proteger sus derechos y libertades frente a acusaciones criminales, ofreciendo representación agresiva y estratégica en todas las etapas del proceso penal.",
    content: [
      {
        subtitle: "Delitos Menores",
        text: "Proporcionamos defensa efectiva para acusaciones de delitos menores como conducir bajo la influencia, hurto menor, posesión simple de drogas y alteración del orden público, trabajando para minimizar las consecuencias en su vida y su historial.",
      },
      {
        subtitle: "Delitos Graves",
        text: "Defendemos a clientes acusados de delitos graves como robo, agresión agravada, tráfico de drogas y otros delitos que conllevan penas severas, desarrollando estrategias de defensa sólidas basadas en una investigación exhaustiva.",
      },
      {
        subtitle: "Delitos de Cuello Blanco",
        text: "Representamos a profesionales y ejecutivos acusados de delitos financieros como fraude, malversación, evasión fiscal y lavado de dinero, con un enfoque que combina conocimiento legal y financiero.",
      },
      {
        subtitle: "Defensa en Juicio",
        text: "Nuestros abogados tienen amplia experiencia en litigios penales y están preparados para llevar su caso a juicio cuando sea necesario, utilizando técnicas de persuasión efectivas y conocimiento profundo de las reglas de evidencia.",
      },
      {
        subtitle: "Negociación de Acuerdos",
        text: "Cuando sea apropiado, negociamos hábilmente con los fiscales para obtener reducciones de cargos, sentencias alternativas o desestimaciones, siempre priorizando sus mejores intereses.",
      },
    ],
    faq: [
      {
        question: "¿Qué debo hacer si soy arrestado?",
        answer:
          "Si es arrestado, debe ejercer su derecho a guardar silencio y solicitar un abogado inmediatamente. No discuta su caso con nadie excepto su abogado. Cualquier declaración puede ser utilizada en su contra en un tribunal.",
      },
      {
        question: "¿Debo aceptar un acuerdo de culpabilidad?",
        answer:
          "La decisión de aceptar un acuerdo depende de muchos factores, incluyendo la fuerza de la evidencia en su contra, las posibles penas si es condenado en juicio, y sus circunstancias personales. Su abogado le aconsejará sobre la mejor estrategia para su caso específico.",
      },
      {
        question: "¿Pueden eliminarse los antecedentes penales?",
        answer:
          "En muchos casos, es posible solicitar la eliminación o sellado de antecedentes penales después de cierto tiempo. Las leyes varían según la jurisdicción y el tipo de delito. Nuestros abogados pueden asesorarle sobre su elegibilidad y guiarle a través del proceso.",
      },
    ],
  },
  "derecho-inmobiliario": {
    title: "Derecho Inmobiliario",
    image: "/placeholder.svg?height=300&width=600",
    intro:
      "Nuestro equipo de derecho inmobiliario ofrece asesoramiento legal integral en todas las facetas de las transacciones y disputas inmobiliarias, ayudando a clientes a navegar por este complejo campo legal.",
    content: [
      {
        subtitle: "Transacciones Inmobiliarias",
        text: "Asesoramos en la compra, venta y financiamiento de propiedades residenciales y comerciales, asegurando que las transacciones se completen sin problemas y que sus intereses estén protegidos en cada etapa del proceso.",
      },
      {
        subtitle: "Arrendamientos",
        text: "Redactamos, revisamos y negociamos contratos de arrendamiento para propietarios e inquilinos, tanto en propiedades residenciales como comerciales, ayudando a establecer términos claros y equitativos.",
      },
      {
        subtitle: "Disputas entre Propietarios e Inquilinos",
        text: "Representamos a propietarios e inquilinos en disputas relacionadas con desalojos, depósitos de seguridad, reparaciones, violaciones de contrato y otras cuestiones, buscando resoluciones eficientes y favorables.",
      },
      {
        subtitle: "Zonificación y Uso de Suelo",
        text: "Ayudamos a clientes a navegar por las complejas regulaciones de zonificación y uso de suelo, obteniendo permisos, variaciones y aprobaciones necesarias para proyectos de desarrollo o cambios en el uso de propiedades.",
      },
      {
        subtitle: "Litigios Inmobiliarios",
        text: "Proporcionamos representación efectiva en litigios relacionados con disputas de títulos, servidumbres, límites de propiedad, defectos de construcción y otras controversias inmobiliarias.",
      },
    ],
    faq: [
      {
        question: "¿Qué documentos necesito revisar antes de comprar una propiedad?",
        answer:
          "Antes de comprar una propiedad, es importante revisar el título de propiedad, informes de inspección, declaraciones de divulgación del vendedor, restricciones de zonificación, impuestos pendientes, y cualquier gravamen o servidumbre que pueda afectar la propiedad.",
      },
      {
        question: "¿Cuánto tiempo toma un proceso de desalojo?",
        answer:
          "El tiempo para completar un desalojo varía según la jurisdicción y las circunstancias específicas, pero generalmente puede tomar entre 3-12 semanas desde la notificación inicial hasta la recuperación de la posesión.",
      },
      {
        question: "¿Qué debo hacer si hay un defecto en una propiedad que compré recientemente?",
        answer:
          "Si descubre un defecto significativo después de comprar una propiedad, revise las declaraciones de divulgación del vendedor y los informes de inspección para determinar si el defecto fue divulgado o debería haber sido descubierto. Dependiendo de la situación, podría tener reclamaciones contra el vendedor, el inspector o incluso el agente inmobiliario.",
      },
    ],
  },
  "lesiones-personales": {
    title: "Lesiones Personales",
    image: "/placeholder.svg?height=300&width=600",
    intro:
      "Nuestro equipo de abogados especializados en lesiones personales está dedicado a ayudar a las víctimas de accidentes a obtener la compensación que merecen por sus lesiones, gastos médicos, pérdida de ingresos y sufrimiento.",
    content: [
      {
        subtitle: "Accidentes Automovilísticos",
        text: "Representamos a víctimas de accidentes de tráfico, incluyendo colisiones con automóviles, camiones, motocicletas y peatones, investigando exhaustivamente el accidente y luchando por una compensación justa.",
      },
      {
        subtitle: "Negligencia Médica",
        text: "Ayudamos a pacientes que han sufrido lesiones debido a errores médicos, diagnósticos incorrectos, errores quirúrgicos, errores de medicación y otras formas de negligencia por parte de profesionales de la salud.",
      },
      {
        subtitle: "Accidentes en Propiedades",
        text: "Representamos a personas lesionadas en propiedades públicas o privadas debido a condiciones peligrosas, como caídas en superficies resbaladizas, escaleras defectuosas, iluminación inadecuada o falta de seguridad.",
      },
      {
        subtitle: "Lesiones Laborales",
        text: "Ayudamos a trabajadores lesionados a navegar por el sistema de compensación laboral y, cuando sea aplicable, exploramos reclamaciones adicionales contra terceros responsables de las lesiones.",
      },
      {
        subtitle: "Muerte Injusta",
        text: "Proporcionamos representación compasiva a familias que han perdido a un ser querido debido a la negligencia o conducta indebida de otros, buscando justicia y compensación por su pérdida.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto vale mi caso de lesiones personales?",
        answer:
          "El valor de un caso de lesiones personales depende de varios factores, incluyendo la gravedad de las lesiones, gastos médicos pasados y futuros, pérdida de ingresos, dolor y sufrimiento, y el impacto en su calidad de vida. Cada caso es único y requiere una evaluación individualizada.",
      },
      {
        question: "¿Cuánto tiempo tengo para presentar una demanda por lesiones personales?",
        answer:
          "El estatuto de limitaciones para casos de lesiones personales varía según la jurisdicción y el tipo de caso, pero generalmente oscila entre 1-3 años desde la fecha de la lesión. Es crucial consultar con un abogado lo antes posible para evitar perder su derecho a reclamar.",
      },
      {
        question: "¿Qué sucede si soy parcialmente responsable de mi accidente?",
        answer:
          "Muchas jurisdicciones siguen la doctrina de negligencia comparativa, que permite a las víctimas recuperar daños incluso si son parcialmente responsables, aunque la compensación puede reducirse proporcionalmente a su grado de culpa. Nuestros abogados pueden explicarle cómo las leyes específicas de su jurisdicción afectan su caso.",
      },
    ],
  },
  "planificacion-patrimonial": {
    title: "Planificación Patrimonial",
    image: "/placeholder.svg?height=300&width=600",
    intro:
      "Nuestro equipo de planificación patrimonial ayuda a individuos y familias a proteger sus activos, minimizar impuestos y asegurar que sus deseos sean respetados en caso de incapacidad o fallecimiento.",
    content: [
      {
        subtitle: "Testamentos",
        text: "Redactamos testamentos personalizados que reflejan sus deseos específicos sobre la distribución de sus bienes, nombramiento de tutores para hijos menores y otras instrucciones importantes.",
      },
      {
        subtitle: "Fideicomisos",
        text: "Creamos diversos tipos de fideicomisos para satisfacer sus necesidades específicas, ya sea proteger activos, proporcionar para beneficiarios con necesidades especiales, minimizar impuestos o evitar el proceso de sucesión.",
      },
      {
        subtitle: "Poderes Notariales",
        text: "Preparamos poderes notariales para asuntos financieros y de atención médica, asegurando que sus asuntos sean manejados según sus deseos si queda incapacitado temporalmente o permanentemente.",
      },
      {
        subtitle: "Directivas Anticipadas de Atención Médica",
        text: "Redactamos documentos que especifican sus preferencias de tratamiento médico y designan a alguien para tomar decisiones médicas en su nombre si no puede hacerlo usted mismo.",
      },
      {
        subtitle: "Administración de Sucesiones",
        text: "Guiamos a los albaceas y administradores a través del proceso de sucesión, ayudando con el inventario de activos, pago de deudas y distribución de bienes a los beneficiarios.",
      },
    ],
    faq: [
      {
        question: "¿Por qué necesito un plan patrimonial si no soy rico?",
        answer:
          "La planificación patrimonial no es solo para los ricos. Todos se benefician de tener documentos básicos como un testamento, poderes notariales y directivas médicas. Estos documentos aseguran que sus deseos sean respetados, simplifican las cosas para sus seres queridos y pueden prevenir conflictos familiares.",
      },
      {
        question: "¿Cuál es la diferencia entre un testamento y un fideicomiso?",
        answer:
          "Un testamento entra en vigor solo después de su muerte y debe pasar por el proceso de sucesión. Un fideicomiso entra en vigor cuando lo crea y puede proporcionar gestión de activos durante su vida y después de su muerte, evitando el proceso de sucesión y ofreciendo mayor privacidad.",
      },
      {
        question: "¿Con qué frecuencia debo revisar mi plan patrimonial?",
        answer:
          "Se recomienda revisar su plan patrimonial cada 3-5 años o después de eventos significativos de la vida como matrimonio, divorcio, nacimiento de un hijo, muerte de un beneficiario, cambios significativos en activos, o cambios importantes en las leyes fiscales o patrimoniales.",
      },
    ],
  },
}

export default function PracticeAreaPage({ params }: { params: { area: string } }) {
  const { area } = params

  // Verificar si el área existe
  const areaData = practiceAreas.find((a) => a.id === area)
  const areaContent = practiceAreasContent[area as keyof typeof practiceAreasContent]

  if (!areaData || !areaContent) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1a365d] mb-6">{areaContent.title}</h1>

      <div className="mb-8 rounded-lg overflow-hidden">
        <Image
          src={areaContent.image || "/placeholder.svg"}
          alt={areaContent.title}
          width={600}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="text-lg text-gray-700 mb-8">{areaContent.intro}</p>

      <div className="space-y-8 mb-12">
        {areaContent.content.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-[#1a365d] mb-3">{section.subtitle}</h3>
            <p className="text-gray-700">{section.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-[#1a365d] mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {areaContent.faq.map((item, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-2">{item.question}</h4>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#1a365d] mb-2">
              ¿Necesita asesoramiento legal en {areaContent.title}?
            </h3>
            <p className="text-gray-700">Nuestros abogados especializados están listos para ayudarle con su caso.</p>
          </div>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1a365d] hover:bg-[#2a4a7d] text-white font-medium rounded-md whitespace-nowrap"
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
            Consultar Ahora
          </a>
        </div>
      </div>
    </div>
  )
}

