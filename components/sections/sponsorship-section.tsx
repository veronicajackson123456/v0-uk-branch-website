import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Associate',
    price: '£5,000',
    period: 'per production',
    description: 'Ideal for SMEs seeking brand visibility through the prestige of British film.',
    features: [
      'Brand logo in closing credits',
      'Social media acknowledgement',
      'Invitation to UK premiere screening',
      'Certificate of sponsorship',
      'Digital press kit mention',
    ],
    highlight: false,
  },
  {
    name: 'Executive',
    price: '£25,000',
    period: 'per production',
    description: 'Strategic placement for established brands seeking significant film exposure.',
    features: [
      'Prominent on-screen brand placement',
      'Dedicated feature in press release',
      'VIP premiere attendance (4 guests)',
      'Behind-the-scenes branded content',
      'International broadcast credit',
      'CNBC Film UK partnership certificate',
    ],
    highlight: true,
  },
  {
    name: 'Presenting',
    price: 'From £100,000',
    period: 'per production',
    description: 'The pinnacle of brand integration — become the face of a CNBC Film UK production.',
    features: [
      'Title-level sponsorship billing',
      'Extensive product / brand integration',
      'Co-branded marketing campaign',
      'Global broadcast & distribution credit',
      'Exclusive premiere event access',
      'Custom branded documentary content',
      'Dedicated account management',
    ],
    highlight: false,
  },
]

export default function SponsorshipSection() {
  return (
    <section id="sponsorship" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/sponsorship-bg.jpg"
          alt="Film premiere event"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-line" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">Sponsorship</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground text-balance mb-6">
            Invest in
            <br />
            <em className="text-gold">British Cinema</em>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CNBC Film UK offers sponsors and corporate partners a uniquely powerful platform — the prestige of British cinema combined with an American network&apos;s global reach. Your brand, woven into stories told to millions.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 flex flex-col ${
                tier.highlight
                  ? 'bg-gold text-background border border-gold'
                  : 'bg-card border border-border hover:border-gold/50 transition-colors duration-300'
              }`}
            >
              {tier.highlight && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-gold border border-gold font-body text-[10px] tracking-widest uppercase px-4 py-1">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className={`font-body text-xs tracking-widest uppercase mb-3 ${tier.highlight ? 'text-background/70' : 'text-gold'}`}>
                  {tier.name} Sponsor
                </h3>
                <p className={`font-display text-4xl font-semibold leading-none mb-1 ${tier.highlight ? 'text-background' : 'text-foreground'}`}>
                  {tier.price}
                </p>
                <p className={`font-body text-xs ${tier.highlight ? 'text-background/60' : 'text-muted-foreground'}`}>
                  {tier.period}
                </p>
              </div>
              <p className={`font-body text-sm leading-relaxed mb-8 ${tier.highlight ? 'text-background/80' : 'text-muted-foreground'}`}>
                {tier.description}
              </p>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={14} className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-background' : 'text-gold'}`} />
                    <span className={`font-body text-xs leading-relaxed ${tier.highlight ? 'text-background/90' : 'text-muted-foreground'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`font-body text-xs tracking-widest uppercase py-3 text-center transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-background text-background hover:bg-background/90'
                    : 'border border-gold text-gold hover:bg-gold hover:text-background'
                }`}
                style={tier.highlight ? { color: 'var(--gold)' } : {}}
              >
                Enquire Now
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="font-body text-xs text-muted-foreground text-center tracking-wide">
          Custom sponsorship packages are available for larger organisations. Contact us at{' '}
          <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>
        </p>
      </div>
    </section>
  )
}
