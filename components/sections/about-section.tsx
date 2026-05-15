import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">Our Story</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight text-balance mb-8">
              Britain&apos;s New
              <br />
              <em className="text-gold">Cinematic</em>
              <br />
              Powerhouse
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              CNBC Film UK is the proud British division of Corporate Network Broadcasting Cinema — the American entertainment conglomerate that has defined corporate storytelling for over two decades. Established in London, our UK arm brings the full weight of an international media network to British shores.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              We are a full-service film and broadcasting company, connecting world-class sponsors with compelling productions, and delivering a platform for exceptional UK talent to reach global audiences. Our productions are broadcast across multiple networks internationally, delivering unparalleled reach for our partners.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
              Rooted in the United Kingdom but connected to a global network, CNBC Film UK represents a rare convergence of Hollywood production standards and British creative excellence.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Global Network', desc: 'Connected to an international broadcasting and production network spanning North America, Europe, and beyond.' },
                { title: 'UK-Rooted', desc: 'Headquartered in London, deeply committed to developing and showcasing British talent and stories.' },
                { title: 'Premium Quality', desc: 'Every production meets the highest cinematic and broadcasting standards befitting a global network.' },
                { title: 'Real Opportunities', desc: 'From acting roles to executive sponsorships, we deliver tangible, career-defining opportunities.' },
              ].map((v) => (
                <div key={v.title} className="border-l-2 border-gold pl-4">
                  <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-2">{v.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/about-bg.jpg"
                alt="CNBC Film UK production team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold p-8 max-w-[180px]">
              <p className="font-display text-4xl font-semibold text-background leading-none">20+</p>
              <p className="font-body text-[10px] tracking-widest uppercase text-background/80 mt-1">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
