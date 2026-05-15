import LegalLayout from '@/components/legal-layout'

export const metadata = {
  title: 'Cookie Policy | CNBC Film UK',
  description: 'Cookie Policy for CNBC Film UK — Corporate Network Broadcasting Cinema United Kingdom Division.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">{title}</h2>
      <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  )
}

function CookieTable({ rows }: { rows: { name: string; type: string; purpose: string; duration: string }[] }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border border-border">
        <thead>
          <tr className="bg-card">
            <th className="font-body text-[10px] tracking-widest uppercase text-gold text-left px-4 py-3 border-b border-border">Cookie Name</th>
            <th className="font-body text-[10px] tracking-widest uppercase text-gold text-left px-4 py-3 border-b border-border">Type</th>
            <th className="font-body text-[10px] tracking-widest uppercase text-gold text-left px-4 py-3 border-b border-border">Purpose</th>
            <th className="font-body text-[10px] tracking-widest uppercase text-gold text-left px-4 py-3 border-b border-border">Duration</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border hover:bg-card/50 transition-colors">
              <td className="font-body text-xs text-foreground px-4 py-3 font-mono">{row.name}</td>
              <td className="font-body text-xs text-muted-foreground px-4 py-3">{row.type}</td>
              <td className="font-body text-xs text-muted-foreground px-4 py-3">{row.purpose}</td>
              <td className="font-body text-xs text-muted-foreground px-4 py-3">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="CNBC Film UK — Corporate Network Broadcasting Cinema (United Kingdom Division)"
      lastUpdated="15 May 2025"
    >
      <div className="mb-8 p-6 bg-card border border-gold/30">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          This Cookie Policy explains how CNBC Film UK uses cookies and similar tracking technologies when you visit <strong className="text-foreground">cnbc.film</strong>. By continuing to use our website, you consent to the use of cookies as described in this policy.
        </p>
      </div>

      <Section title="1. What Are Cookies?">
        <p>
          Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies do not contain any information that personally identifies you directly, but personal information that we store about you may be linked to information stored in and obtained from cookies.
        </p>
      </Section>

      <Section title="2. How We Use Cookies">
        <p>CNBC Film UK uses cookies for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong className="text-foreground">Strictly Necessary Cookies:</strong> Essential for the basic functioning of our website. These cannot be disabled.</li>
          <li><strong className="text-foreground">Performance &amp; Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous data about page visits, session duration, and navigation paths.</li>
          <li><strong className="text-foreground">Functionality Cookies:</strong> Remember your preferences and improve your experience on return visits.</li>
          <li><strong className="text-foreground">Marketing &amp; Targeting Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of our campaigns (only with your consent).</li>
        </ul>
      </Section>

      <Section title="3. Cookies We Use">
        <p>The following table sets out the cookies currently in use on our website:</p>
        <CookieTable
          rows={[
            { name: '__session', type: 'Strictly Necessary', purpose: 'Maintains your active session on the website', duration: 'Session' },
            { name: 'cnbc_consent', type: 'Strictly Necessary', purpose: 'Stores your cookie consent preferences', duration: '12 months' },
            { name: '_ga', type: 'Analytics', purpose: 'Google Analytics — distinguishes unique users', duration: '24 months' },
            { name: '_ga_*', type: 'Analytics', purpose: 'Google Analytics — session state persistence', duration: '24 months' },
            { name: '_gid', type: 'Analytics', purpose: 'Google Analytics — distinguishes users for 24 hours', duration: '24 hours' },
            { name: '_gat', type: 'Analytics', purpose: 'Google Analytics — throttles request rate', duration: '1 minute' },
            { name: 'cnbc_pref', type: 'Functionality', purpose: 'Stores user preferences for site experience', duration: '6 months' },
          ]}
        />
      </Section>

      <Section title="4. Third-Party Cookies">
        <p>
          Some cookies on our website are set by third-party services. These third parties may set their own cookies when you visit pages on our site. We have no control over third-party cookies and recommend reviewing the privacy and cookie policies of any third-party services embedded on our site.
        </p>
        <p>
          Third-party services that may place cookies include: Google Analytics (website analytics), and any embedded content providers where applicable.
        </p>
      </Section>

      <Section title="5. Your Cookie Choices">
        <p>
          You have the right to accept, decline, or manage your cookie preferences. You can do this in the following ways:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong className="text-foreground">Cookie Banner:</strong> When you first visit our site, you will be presented with a cookie consent banner allowing you to accept or decline non-essential cookies.
          </li>
          <li>
            <strong className="text-foreground">Browser Settings:</strong> Most web browsers allow you to manage cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of our website.
          </li>
          <li>
            <strong className="text-foreground">Opt-Out Tools:</strong> For Google Analytics, you can install the Google Analytics Opt-out Browser Add-on available at <strong className="text-foreground">tools.google.com/dlpage/gaoptout</strong>.
          </li>
        </ul>
      </Section>

      <Section title="6. Cookies and UK GDPR">
        <p>
          Under the UK General Data Protection Regulation (UK GDPR) and the Privacy and Electronic Communications Regulations (PECR), we are required to obtain your consent before placing non-essential cookies on your device. Our cookie consent mechanism complies with these requirements. Where cookies are necessary for the operation of our website, we rely on our legitimate interest to use them without explicit consent.
        </p>
      </Section>

      <Section title="7. How to Contact Us">
        <p>
          If you have any questions or concerns about our use of cookies, please contact us at <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>. You may also contact the Information Commissioner&apos;s Office (ICO) at <strong className="text-foreground">ico.org.uk</strong> if you believe your data protection rights have been infringed.
        </p>
      </Section>

      <Section title="8. Changes to This Cookie Policy">
        <p>
          We may update this Cookie Policy from time to time as technology and legal requirements change. We encourage you to check this page periodically. Any significant changes will be highlighted with an updated &quot;Last updated&quot; date at the top of this page.
        </p>
      </Section>
    </LegalLayout>
  )
}
