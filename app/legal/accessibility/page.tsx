import LegalLayout from '@/components/legal-layout'

export const metadata = {
  title: 'Accessibility Statement | CNBC Film UK',
  description: 'Accessibility Statement for CNBC Film UK — our commitment to an inclusive digital experience.',
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

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility"
      subtitle="CNBC Film UK — Accessibility Statement"
      lastUpdated="15 May 2026"
    >
      <div className="mb-8 p-6 bg-card border border-gold/30">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          CNBC Film UK is committed to ensuring that our website is accessible to everyone, regardless of ability or technology. We continuously work to improve the user experience and apply relevant accessibility standards across <strong className="text-foreground">cnbc.film</strong>.
        </p>
      </div>

      <Section title="1. Our Commitment">
        <p>
          We believe that all people deserve equal access to information and digital services. CNBC Film UK is dedicated to making our website accessible to individuals with disabilities, including those with visual, auditory, motor, and cognitive impairments. We strive to meet the requirements of the <strong className="text-foreground">Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA</strong>, as referenced in the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 (SI 2018/952).
        </p>
      </Section>

      <Section title="2. Conformance Status">
        <p>
          We are actively working towards full WCAG 2.1 Level AA conformance. At present, our website is <strong className="text-foreground">partially conformant</strong>, meaning some content may not yet fully meet all accessibility requirements. We are committed to addressing any identified gaps as a matter of priority.
        </p>
        <p>
          Known areas we are actively improving include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Ensuring all non-text media elements include appropriate text alternatives.</li>
          <li>Improving keyboard navigability across all interactive components.</li>
          <li>Enhancing colour contrast ratios across decorative and informational elements.</li>
          <li>Ensuring all form fields are clearly labelled for screen reader compatibility.</li>
        </ul>
      </Section>

      <Section title="3. Technical Specifications">
        <p>
          The accessibility of our website relies on the following technologies working in combination with your browser and any assistive technology you use:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>HTML5 (semantic markup)</li>
          <li>CSS3 (responsive and adaptable styles)</li>
          <li>JavaScript (progressive enhancement only — non-essential features degrade gracefully)</li>
          <li>WAI-ARIA (Accessible Rich Internet Applications) attributes where applicable</li>
        </ul>
        <p className="mt-3">
          Our website is designed to be compatible with modern browsers including Chrome, Firefox, Safari, and Edge, and with common assistive technologies such as screen readers (e.g., NVDA, JAWS, VoiceOver) and voice recognition software.
        </p>
      </Section>

      <Section title="4. Measures We Take">
        <p>CNBC Film UK takes the following measures to support accessibility:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Using semantic HTML elements to provide meaningful structure to content.</li>
          <li>Providing visible focus indicators for keyboard navigation.</li>
          <li>Including descriptive <code className="text-foreground bg-card px-1 py-0.5">alt</code> text on all meaningful images.</li>
          <li>Ensuring sufficient colour contrast between foreground text and backgrounds.</li>
          <li>Providing a consistent and predictable navigation structure throughout the site.</li>
          <li>Avoiding content that flashes more than three times per second.</li>
          <li>Ensuring text can be resized up to 200% without loss of content or functionality.</li>
        </ul>
      </Section>

      <Section title="5. Known Limitations">
        <p>
          Despite our best efforts, some areas of the website may not yet fully conform to WCAG 2.1 Level AA. We are aware of the following limitations and are working to resolve them:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Some background images may not provide sufficient contrast with overlaid text in all viewing conditions.</li>
          <li>Third-party embedded content (if any) may not meet the same accessibility standards as our own content.</li>
          <li>Some PDF documents or downloadable materials may not yet be fully accessible.</li>
        </ul>
        <p className="mt-3">
          If you encounter any specific accessibility barrier on our site, please let us know so we can address it.
        </p>
      </Section>

      <Section title="6. Feedback & Contact">
        <p>
          We welcome your feedback on the accessibility of our website. If you experience any accessibility barriers, or if you require information or content in a different format (for example, large print, audio, or plain text), please contact us:
        </p>
        <ul className="list-none space-y-1 mt-3">
          <li><strong className="text-foreground">Email:</strong> <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a></li>
          <li><strong className="text-foreground">Address:</strong> CNBC Film UK, London, United Kingdom</li>
        </ul>
        <p className="mt-3">
          We aim to respond to accessibility feedback within <strong className="text-foreground">5 working days</strong>.
        </p>
      </Section>

      <Section title="7. Enforcement Procedure">
        <p>
          The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 in England, Scotland, and Wales. If you are not satisfied with our response to your accessibility concern, you may contact the <strong className="text-foreground">Equality Advisory and Support Service (EASS)</strong> at <strong className="text-foreground">equalityadvisoryservice.com</strong>.
        </p>
      </Section>

      <Section title="8. Formal Complaints">
        <p>
          If you wish to raise a formal complaint regarding the accessibility of this website, please write to us at <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a> with the subject line &quot;Accessibility Complaint&quot;. We will acknowledge your complaint within 3 working days and provide a full response within 20 working days.
        </p>
      </Section>

      <Section title="9. Review Schedule">
        <p>
          This Accessibility Statement was last reviewed on <strong className="text-foreground">15 May 2026</strong>. We review and update this statement annually, or when significant changes are made to the website. Our ongoing accessibility programme ensures that improvements are continuously made as new content and features are published.
        </p>
      </Section>
    </LegalLayout>
  )
}
