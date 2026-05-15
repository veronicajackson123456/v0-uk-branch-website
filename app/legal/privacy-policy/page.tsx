import LegalLayout from '@/components/legal-layout'

export const metadata = {
  title: 'Privacy Policy | CNBC Film UK',
  description: 'Privacy Policy for CNBC Film UK — Corporate Network Broadcasting Cinema United Kingdom Division.',
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

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="CNBC Film UK — Corporate Network Broadcasting Cinema (United Kingdom Division)"
      lastUpdated="15 May 2025"
    >
      <div className="mb-8 p-6 bg-card border border-gold/30">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          CNBC Film UK (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="text-foreground">cnbc.film</strong> and interact with our services. Please read this policy carefully.
        </p>
      </div>

      <Section title="1. Who We Are">
        <p>
          CNBC Film UK is the United Kingdom division of Corporate Network Broadcasting Cinema, a corporate entertainment and film production company. Our registered address is in London, United Kingdom. For data protection matters, we act as the data controller of your personal information.
        </p>
        <p>
          You may contact us regarding your personal data at any time by emailing <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>.
        </p>
      </Section>

      <Section title="2. Data We Collect">
        <p>We may collect the following categories of personal data:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong className="text-foreground">Identity Data:</strong> first name, last name, professional name or alias.</li>
          <li><strong className="text-foreground">Contact Data:</strong> email address, telephone number, and postal address.</li>
          <li><strong className="text-foreground">Professional Data:</strong> CV, showreel, headshots, portfolio, and professional history (for talent applicants).</li>
          <li><strong className="text-foreground">Financial Data:</strong> invoicing and payment information for sponsors and commercial partners.</li>
          <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and browsing behaviour on our site.</li>
          <li><strong className="text-foreground">Communications Data:</strong> messages, enquiries, and correspondence you send to us.</li>
        </ul>
      </Section>

      <Section title="3. How We Collect Your Data">
        <p>We collect data through the following means:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>When you complete and submit a contact or application form on our website.</li>
          <li>When you email us directly at info@cnbc.film.</li>
          <li>Automatically through cookies and analytics tools when you visit our website (see our Cookie Policy).</li>
          <li>Through third parties such as talent agencies or industry platforms where you have given permission for your data to be shared.</li>
        </ul>
      </Section>

      <Section title="4. How We Use Your Data">
        <p>We use your data for the following legitimate purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>To respond to your enquiries and manage our communications with you.</li>
          <li>To process talent applications and manage casting procedures.</li>
          <li>To manage sponsor and partner relationships and fulfil contractual obligations.</li>
          <li>To send you relevant information about productions, opportunities, and company news (where you have consented).</li>
          <li>To comply with legal and regulatory obligations.</li>
          <li>To improve our website and the services we offer.</li>
        </ul>
      </Section>

      <Section title="5. Legal Basis for Processing">
        <p>
          We process your personal data under the following lawful bases as set out in the UK General Data Protection Regulation (UK GDPR):
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong className="text-foreground">Consent:</strong> where you have actively provided consent, such as opting into marketing communications.</li>
          <li><strong className="text-foreground">Contract:</strong> where processing is necessary to perform a contract with you or to take steps at your request before entering into a contract.</li>
          <li><strong className="text-foreground">Legitimate Interests:</strong> where we have a legitimate business interest in processing your data, provided this is not overridden by your rights.</li>
          <li><strong className="text-foreground">Legal Obligation:</strong> where processing is necessary to comply with a legal obligation.</li>
        </ul>
      </Section>

      <Section title="6. Data Sharing">
        <p>
          We do not sell your personal data to third parties. We may share your data with trusted third parties in the following limited circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Service providers who assist us in operating our website and delivering our services (e.g., hosting providers, email platforms).</li>
          <li>Our parent company, Corporate Network Broadcasting Cinema in the United States, for production and operational purposes, subject to appropriate safeguards.</li>
          <li>Regulatory authorities, law enforcement, and government bodies where required by law.</li>
          <li>Professional advisers such as lawyers and accountants under duties of confidentiality.</li>
        </ul>
      </Section>

      <Section title="7. International Data Transfers">
        <p>
          As part of a US-based corporate group, some of your data may be transferred to the United States. We ensure all international transfers are subject to appropriate safeguards, including Standard Contractual Clauses approved by the UK Information Commissioner&apos;s Office (ICO), in line with UK GDPR requirements.
        </p>
      </Section>

      <Section title="8. Data Retention">
        <p>
          We retain personal data only for as long as necessary for the purposes set out in this policy, or as required by law. Talent application data is retained for up to 24 months unless a production engagement is agreed. Sponsor and partner data is retained for the duration of the commercial relationship plus 7 years for legal and accounting purposes.
        </p>
      </Section>

      <Section title="9. Your Rights">
        <p>Under UK GDPR, you have the following rights:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong className="text-foreground">Right of Access:</strong> to request a copy of the personal data we hold about you.</li>
          <li><strong className="text-foreground">Right to Rectification:</strong> to request correction of inaccurate or incomplete data.</li>
          <li><strong className="text-foreground">Right to Erasure:</strong> to request deletion of your personal data in certain circumstances.</li>
          <li><strong className="text-foreground">Right to Restrict Processing:</strong> to request that we limit the use of your data.</li>
          <li><strong className="text-foreground">Right to Data Portability:</strong> to receive your data in a structured, machine-readable format.</li>
          <li><strong className="text-foreground">Right to Object:</strong> to object to processing based on legitimate interests.</li>
          <li><strong className="text-foreground">Right to Withdraw Consent:</strong> at any time, where processing is based on consent.</li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, please contact us at <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <strong className="text-foreground">ico.org.uk</strong>.
        </p>
      </Section>

      <Section title="10. Security">
        <p>
          We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. However, no transmission over the internet is entirely secure, and we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="11. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal data.
        </p>
      </Section>

      <Section title="12. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this page periodically. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.
        </p>
      </Section>
    </LegalLayout>
  )
}
