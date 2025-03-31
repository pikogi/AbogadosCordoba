interface CssParallaxHeroProps {
    imageUrl: string
    children: React.ReactNode
    overlayColor?: string
    overlayOpacity?: number
  }
  
  export function CssParallaxHero({
    imageUrl,
    children,
    overlayColor = "#1a365d",
    overlayOpacity = 0.2
  }: CssParallaxHeroProps) {
    return (
      <section className="relative">
        {/* Fondo con parallax usando CSS puro */}
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: `${overlayColor}`, opacity: overlayOpacity }}
        />
        
        {/* Contenido */}
        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
          {children}
        </div>
      </section>
    )
  }