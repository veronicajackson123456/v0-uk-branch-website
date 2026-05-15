import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="London cinematic backdrop"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 55%, rgba(12,12,12,1) 100%)' }} />

      {/* Gold horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="gold-line" />
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">
            United Kingdom Division
          </span>
          <span className="gold-line" />
        </div>

        {/* Main heading */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-light text-foreground leading-none tracking-tight text-balance mb-6">
          Corporate Network
          <br />
          <span className="text-gold italic">Broadcasting</span>
          <br />
          Cinema
        </h1>

        <p className="font-body text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-12 tracking-wide">
          The official UK division of America&apos;s premier corporate entertainment network.
          Producing world-class feature films, recruiting exceptional talent,
          and building lasting partnerships across the United Kingdom.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#sponsorship"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 bg-gold text-background hover:bg-gold-light transition-all duration-300 min-w-[200px] text-center"
          >
            Become a Sponsor
          </Link>
          <Link
            href="#talent"
            className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-foreground/50 text-foreground hover:border-gold hover:text-gold transition-all duration-300 min-w-[200px] text-center"
          >
            Join Our Talent
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-12 mt-20">
          {[
            { value: '25+', label: 'Feature Films' },
            { value: '500+', label: 'UK Talents Represented' },
            { value: '£50M+', label: 'Productions Value' },
            { value: '3', label: 'BAFTA Nominations' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gold font-light">{stat.value}</p>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <ChevronDown size={16} className="text-gold" />
      </div>
    </section>
  )
}
