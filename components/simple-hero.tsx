import type React from "react"
interface SimpleHeroProps {
  imageUrl: string
  children: React.ReactNode
  overlayColor?: string
  overlayOpacity?: number
}

export function SimpleHero({ imageUrl, children, overlayColor = "#1a365d", overlayOpacity = 0.8 }: SimpleHeroProps) {
  return (
    <section className="relative">
      {/* Fondo estático simple */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: `${overlayColor}`, opacity: overlayOpacity }} />

      {/* Contenido */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">{children}</div>
    </section>
  )
}

