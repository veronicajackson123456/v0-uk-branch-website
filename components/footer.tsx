import Link from 'next/link'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Productions', href: '#productions' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
  Opportunities: [
    { label: 'Film Sponsorship', href: '#sponsorship' },
    { label: 'Actor Recruitment', href: '#talent' },
    { label: 'Partnership', href: '#contact' },
    { label: 'Casting Calls', href: '#talent' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/legal/terms-of-service' },
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
    { label: 'Accessibility', href: '/legal/accessibility' },
    { label: 'Disclaimer', href: '/legal/disclaimer' },
    { label: 'Refund Policy', href: '/legal/refund-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border">
      {/* Top band */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col leading-none mb-6">
              <span className="font-display text-3xl font-semibold tracking-widest text-gold uppercase">
                CNBC Film
              </span>
              <span className="font-body text-[11px] tracking-[0.35em] text-muted-foreground uppercase mt-1">
                United Kingdom Division
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              The official UK division of Corporate Network Broadcasting Cinema — bringing world-class film production, broadcasting, and entertainment to British shores.
            </p>
            <div className="mt-8">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Contact</p>
              <a
                href="mailto:info@cnbc.film"
                className="font-body text-sm text-gold hover:text-gold-light transition-colors"
              >
                info@cnbc.film
              </a>
            </div>
            <div className="mt-4">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Based in</p>
              <p className="font-body text-sm text-foreground">London, United Kingdom</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-6">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} CNBC Film UK — Corporate Network Broadcasting Cinema (United Kingdom). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/legal/terms-of-service" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              Terms
            </Link>
            <Link href="/legal/privacy-policy" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              Privacy
            </Link>
            <Link href="/legal/cookie-policy" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              Cookies
            </Link>
            <Link href="/legal/accessibility" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              Accessibility
            </Link>
            <Link href="/legal/disclaimer" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              Disclaimer
            </Link>
            <Link href="/legal/refund-policy" className="font-body text-xs text-muted-foreground hover:text-gold transition-colors">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
