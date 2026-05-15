import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

interface LegalLayoutProps {
  title: string
  subtitle: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, subtitle, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-charcoal pt-32 pb-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground/40">/</span>
              <span className="font-body text-xs tracking-widest uppercase text-gold">{title}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-4">
              {title}
            </h1>
            <p className="font-body text-sm text-muted-foreground mb-3">{subtitle}</p>
            <p className="font-body text-xs text-muted-foreground/60 tracking-wide">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="prose-legal">
              {children}
            </div>
            <div className="mt-16 pt-10 border-t border-border">
              <p className="font-body text-sm text-muted-foreground">
                If you have any questions regarding this document, please contact us at{' '}
                <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>
              </p>
              <div className="flex gap-6 mt-6">
                <Link href="/legal/privacy-policy" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/legal/terms-and-conditions" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors">
                  Terms &amp; Conditions
                </Link>
                <Link href="/legal/cookie-policy" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
