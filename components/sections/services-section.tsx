import Image from 'next/image'

const services = [
  {
    number: '01',
    title: 'Feature Film Production',
    desc: 'End-to-end feature film production from script development and casting through to post-production and international distribution.',
  },
  {
    number: '02',
    title: 'Broadcasting & Distribution',
    desc: 'Access to our global broadcasting network for wide international reach across American and European markets.',
  },
  {
    number: '03',
    title: 'Corporate Film & Documentary',
    desc: 'High-end corporate films, brand documentaries, and factual productions that tell your organisation\'s story with cinematic quality.',
  },
  {
    number: '04',
    title: 'Talent Management',
    desc: 'Career representation and development for actors, presenters, and production professionals under the CNBC Film UK banner.',
  },
  {
    number: '05',
    title: 'Brand Integration',
    desc: 'Strategic, authentic placement of brands within our productions for maximum visibility without disrupting narrative integrity.',
  },
  {
    number: '06',
    title: 'Post-Production Services',
    desc: 'Full post-production facilities including editing, colour grading, sound design, and visual effects for broadcast-ready deliverables.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background">
      {/* Background accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="relative h-full">
          <Image
            src="/images/services-bg.jpg"
            alt="Broadcasting studio"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="gold-line" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">What We Do</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight text-balance">
            Media &amp;
            <br />
            Production
            <br />
            <em className="text-gold">Services</em>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-4xl">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-background p-8 hover:bg-card transition-colors duration-300 group"
            >
              <span className="font-display text-5xl font-light text-gold/20 group-hover:text-gold/40 transition-colors duration-300 block mb-4">
                {service.number}
              </span>
              <h3 className="font-body text-sm font-semibold tracking-wide text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
