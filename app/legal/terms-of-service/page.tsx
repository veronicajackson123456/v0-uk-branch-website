import LegalLayout from '@/components/legal-layout'

export const metadata = {
  title: 'Terms of Service | CNBC Film UK',
  description: 'Terms of Service for CNBC Film UK — Corporate Network Broadcasting Cinema United Kingdom Division.',
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

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="CNBC Film UK — Corporate Network Broadcasting Cinema (United Kingdom Division)"
      lastUpdated="15 May 2026"
    >
      <div className="mb-8 p-6 bg-card border border-gold/30">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the CNBC Film UK website at <strong className="text-foreground">cnbc.film</strong> and any services, content, or features made available through it. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
        </p>
      </div>

      <Section title="1. About Us">
        <p>
          CNBC Film UK is the United Kingdom division of Corporate Network Broadcasting Cinema (&quot;CNBC&quot;), a corporate entertainment and film production company incorporated in the United States. Our UK operations are headquartered in London, United Kingdom. References to &quot;CNBC Film UK&quot;, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot; in these Terms refer to this entity.
        </p>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>.
        </p>
      </Section>

      <Section title="2. Acceptance of Terms">
        <p>
          By visiting, accessing, or using our website, or by submitting any application, enquiry, or expression of interest through it, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <a href="/legal/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>. These Terms constitute a legally binding agreement between you and CNBC Film UK.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting to this page. Your continued use of the website following any update constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="3. Eligibility">
        <p>
          Our website and services are intended for use by individuals who are at least 18 years of age. By using this website, you represent and warrant that you are 18 years of age or older, that you have the legal capacity to enter into a binding agreement, and that your use of the website complies with all applicable laws and regulations.
        </p>
      </Section>

      <Section title="4. Permitted Use of This Website">
        <p>You may use this website for lawful purposes only. You agree that you will not:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Use the website in any way that violates applicable local, national, or international laws or regulations.</li>
          <li>Attempt to gain unauthorised access to any part of our website, servers, or connected systems.</li>
          <li>Transmit any unsolicited or unauthorised advertising, promotional material, or spam.</li>
          <li>Upload, post, or transmit any content that is defamatory, offensive, fraudulent, or harmful to others.</li>
          <li>Introduce malware, viruses, trojans, or any other malicious code.</li>
          <li>Scrape, reproduce, or redistribute our website content without our written permission.</li>
          <li>Misrepresent your identity or affiliation with any person or organisation when engaging with us.</li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p>
          All content on this website — including but not limited to text, images, graphics, logos, brand marks, video content, designs, and underlying software — is the exclusive property of CNBC Film UK or its licensors and is protected under UK and international copyright, trade mark, and intellectual property laws.
        </p>
        <p>
          The CNBC Film UK name, logo, and brand identity are proprietary trade marks. No content or branding may be reproduced, distributed, published, or commercially exploited without our prior written consent. Unauthorised use may result in civil or criminal liability.
        </p>
        <p>
          Nothing in these Terms grants you any licence or right to use our intellectual property except as expressly set out here.
        </p>
      </Section>

      <Section title="6. Talent Applications & Casting">
        <p>
          By submitting a talent application — whether through this website, by email, or any other channel — you confirm that all information, materials, and representations you provide are accurate, complete, truthful, and your own (or that you have the right to provide them).
        </p>
        <p>
          Submission of an application does not guarantee representation, casting, an audition, or any employment relationship with CNBC Film UK. We reserve the sole and absolute discretion to accept, decline, or withhold a response to any application.
        </p>
        <p>
          Submitted materials (including headshots, CVs, showreels, and supporting documents) may be retained for up to 24 months for casting consideration purposes. You may request removal at any time by writing to <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>.
        </p>
        <p>
          Any engagement, role offer, or working arrangement arising from an application shall be governed by a separate written agreement between the individual and CNBC Film UK, which will supersede these Terms in respect of that specific engagement.
        </p>
      </Section>

      <Section title="7. Sponsorship & Commercial Arrangements">
        <p>
          Expressions of interest or enquiries submitted through our website do not constitute a legally binding offer or agreement. All sponsorship, partnership, and commercial arrangements are subject to a formal, signed written contract between the relevant parties.
        </p>
        <p>
          CNBC Film UK reserves the absolute right to accept or decline any sponsorship or commercial proposal. The specific fees, deliverables, rights, and obligations of any arrangement shall be set out exclusively in the executed agreement applicable to that arrangement.
        </p>
      </Section>

      <Section title="8. Disclaimers & Accuracy">
        <p>
          We endeavour to ensure that all information on this website is accurate and current. However, we make no warranties or representations — express or implied — as to the completeness, accuracy, reliability, suitability, or availability of any content. All information is provided &quot;as is&quot; and is subject to change without notice.
        </p>
        <p>
          Nothing on this website constitutes professional, legal, financial, or investment advice. You should seek independent professional guidance before making any decisions based on content found on this site.
        </p>
      </Section>

      <Section title="9. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, CNBC Film UK shall not be liable for any direct, indirect, incidental, special, consequential, or punitive loss or damage arising out of or in connection with your use of this website or reliance on any content found on it. This includes, without limitation, loss of revenue, loss of data, or any other commercial or economic loss.
        </p>
        <p>
          Our total aggregate liability to you for any claim arising from these Terms or your use of this website shall not exceed £100 (one hundred British pounds sterling).
        </p>
        <p>
          Nothing in these Terms limits or excludes our liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited under applicable UK law.
        </p>
      </Section>

      <Section title="10. Third-Party Links & Services">
        <p>
          Our website may contain links to third-party websites or services. These links are provided for convenience only. We have no control over, and accept no responsibility for, the content, privacy practices, or availability of those sites. Your use of any third-party site is governed by that site&apos;s own terms and policies.
        </p>
      </Section>

      <Section title="11. Privacy & Data Protection">
        <p>
          Your use of this website is subject to our <a href="/legal/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference. By using this website, you consent to the processing of your personal data as described in that policy, in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
      </Section>

      <Section title="12. Governing Law & Jurisdiction">
        <p>
          These Terms of Service, and any dispute or claim arising out of or in connection with them (including non-contractual disputes), shall be governed by and construed in accordance with the laws of England and Wales. Both parties irrevocably submit to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </Section>

      <Section title="13. Severability">
        <p>
          If any provision of these Terms is held to be invalid, unlawful, or unenforceable by a court of competent jurisdiction, that provision shall be severed, and the remaining provisions shall continue in full force and effect.
        </p>
      </Section>

      <Section title="14. Waiver">
        <p>
          Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver of any provision of these Terms must be in writing and signed by an authorised representative of CNBC Film UK.
        </p>
      </Section>

      <Section title="15. Entire Agreement">
        <p>
          These Terms of Service, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and CNBC Film UK regarding your use of this website, and supersede all prior discussions, representations, or agreements relating to the same subject matter.
        </p>
      </Section>

      <Section title="16. Contact">
        <p>
          If you have any questions, concerns, or complaints about these Terms of Service, please contact us at:
        </p>
        <ul className="list-none space-y-1 mt-3">
          <li><strong className="text-foreground">Email:</strong> <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a></li>
          <li><strong className="text-foreground">Address:</strong> CNBC Film UK, London, United Kingdom</li>
        </ul>
        <p className="mt-3">We aim to respond to all enquiries within 10 working days.</p>
      </Section>
    </LegalLayout>
  )
}
