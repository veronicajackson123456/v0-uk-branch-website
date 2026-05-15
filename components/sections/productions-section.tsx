import Image from 'next/image'

const productions = [
  {
    title: 'Shadows Over the Thames',
    type: 'Feature Film',
    status: 'In Production',
    year: '2025',
    description: 'A gripping psychological thriller set against the backdrop of modern London, following a corporate investigator who uncovers a vast conspiracy reaching the highest levels of British government.',
    image: '/images/prod-1.jpg',
  },
  {
    title: 'The Estate',
    type: 'Feature Film',
    status: 'In Development',
    year: '2026',
    description: 'An epic period drama spanning three generations of a British aristocratic family, exploring themes of legacy, power, and the relentless change of the 20th century.',
    image: '/images/prod-2.jpg',
  },
  {
    title: 'The Network: UK',
    type: 'Documentary Series',
    status: 'Pre-Production',
    year: '2025',
    description: 'An authoritative documentary series profiling the most influential figures in British business, culture, and public life — told with unparalleled cinematic craft.',
    image: '/images/prod-3.jpg',
  },
]

const statusColor: Record<string, string> = {
  'In Production': 'text-green-400 border-green-400/40',
  'In Development': 'text-gold border-gold/40',
  'Pre-Production': 'text-blue-400 border-blue-400/40',
}

export default function ProductionsSection() {
  return (
    <section id="productions" className="relative bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">Productions</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight text-balance">
              Current &amp;
              <br />
              <em className="text-gold">Upcoming</em>
              <br />
              Productions
            </h2>
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-sm leading-relaxed">
            A curated slate of productions — feature films, documentaries, and broadcast series — all produced to international broadcast standards.
          </p>
        </div>

        {/* Productions list */}
        <div className="flex flex-col gap-px bg-border">
          {productions.map((prod, idx) => (
            <div
              key={prod.title}
              className="bg-charcoal grid grid-cols-1 md:grid-cols-5 gap-0 group hover:bg-card transition-colors duration-300"
            >
              {/* Image */}
              <div className="md:col-span-2 relative aspect-video md:aspect-auto overflow-hidden">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-4 left-4">
                  <span className="font-display text-5xl font-light text-foreground/10">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`font-body text-[10px] tracking-widest uppercase border px-2 py-0.5 ${statusColor[prod.status] ?? 'text-muted-foreground border-border'}`}>
                    {prod.status}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">{prod.type}</span>
                  <span className="font-body text-xs text-muted-foreground">{prod.year}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
                  {prod.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {prod.description}
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="font-body text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2"
                  >
                    Enquire About This Production
                    <span className="text-lg leading-none">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
