import Image from 'next/image'
import Link from 'next/link'

const roles = [
  {
    title: 'Lead & Supporting Actors',
    desc: 'Principal roles in feature films and broadcast productions. All experience levels considered.',
  },
  {
    title: 'Presenting & Hosting',
    desc: 'On-camera presenting roles for corporate films, documentaries, and broadcast programmes.',
  },
  {
    title: 'Background & Supporting Artists',
    desc: 'Supporting artist roles across a range of production types in UK locations.',
  },
  {
    title: 'Voice Artists',
    desc: 'Voiceover and narration talent for film, documentary, and commercial production.',
  },
  {
    title: 'Stunt Performers',
    desc: 'Experienced stunt professionals for action sequences in feature film productions.',
  },
  {
    title: 'Production Crew',
    desc: 'Directors, cinematographers, editors, sound, and production designers to join our UK team.',
  },
]

export default function TalentSection() {
  return (
    <section id="talent" className="relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/talent-bg.jpg"
                alt="UK talent recruitment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.8) 0%, transparent 50%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-3xl font-light text-foreground italic">
                  &ldquo;Your story belongs on screen.&rdquo;
                </p>
                <div className="gold-line mt-4" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="font-body text-xs tracking-[0.4em] uppercase text-gold">Talent Recruitment</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground leading-tight text-balance mb-8">
              We Are Casting
              <br />
              <em className="text-gold">UK Talent</em>
              <br />
              Right Now
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              CNBC Film UK is actively recruiting talented individuals across all aspects of film and broadcast production. Whether you are an established professional or an ambitious newcomer, we have a pathway designed for you.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
              Our talent joins a roster that operates across international productions, with genuine exposure to global audiences through our American parent network and international distribution agreements.
            </p>

            {/* Roles grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {roles.map((role) => (
                <div key={role.title} className="p-5 bg-card border border-border hover:border-gold/50 transition-colors duration-300">
                  <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-2">{role.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>

            {/* Process steps */}
            <div className="mb-10">
              <h3 className="font-body text-xs tracking-widest uppercase text-gold mb-6">How to Apply</h3>
              <div className="flex flex-col gap-4">
                {[
                  { step: '01', text: 'Submit your application and showreel via our contact form below.' },
                  { step: '02', text: 'Our casting team reviews submissions and contacts shortlisted talent.' },
                  { step: '03', text: 'Attend a screen test or interview at our London studios.' },
                  { step: '04', text: 'Receive your production assignment and join the CNBC Film UK family.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-5">
                    <span className="font-display text-2xl text-gold/40 font-light leading-none shrink-0">{item.step}</span>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-block font-body text-xs tracking-widest uppercase px-10 py-4 bg-gold text-background hover:bg-gold-light transition-all duration-300"
            >
              Submit Your Application
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
