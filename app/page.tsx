import { AboutSection } from "@/components/about-section"
import { PracticeAreas } from "@/components/practice-areas"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { SimpleHero } from "@/components/simple-hero"
import { CssParallaxHero } from "@/components/css-parallax-hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section con fondo estático simple */}
      <CssParallaxHero imageUrl="/images/Abogado1.jpg">
        <div className="text-center max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluciones Legales Expertas para sus Necesidades</h1>
          <p className="text-lg mb-8 text-gray-200">
            Nuestros abogados experimentados están dedicados a proporcionar servicios legales excepcionales con
            integridad y compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#1a365d] bg-white hover:bg-gray-100"
            >
              Conozca Más
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md"
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
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </CssParallaxHero>

      {/* About Section */}
      <AboutSection />

      {/* Practice Areas */}
      <PracticeAreas />

      {/* Team Section */}
      <TeamSection />

      {/* Footer with Contact Info */}
      <Footer />
    </div>
  )
}

