import LegalLayout from '@/components/legal-layout'

export const metadata = {
  title: 'Terms & Conditions | CNBC Film UK',
  description: 'Terms and Conditions for CNBC Film UK — Corporate Network Broadcasting Cinema United Kingdom Division.',
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

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="CNBC Film UK — Corporate Network Broadcasting Cinema (United Kingdom Division)"
      lastUpdated="15 May 2025"
    >
      <div className="mb-8 p-6 bg-card border border-gold/30">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          By accessing and using the CNBC Film UK website at <strong className="text-foreground">cnbc.film</strong>, and by engaging with our services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our website or submitting any application or enquiry.
        </p>
      </div>

      <Section title="1. About CNBC Film UK">
        <p>
          CNBC Film UK is the United Kingdom division of Corporate Network Broadcasting Cinema, a US-incorporated entertainment corporation. References to &quot;CNBC Film UK&quot;, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot; refer to this entity. Our operations are based in London, United Kingdom.
        </p>
      </Section>

      <Section title="2. Use of This Website">
        <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Use the website in any way that violates applicable local, national, or international laws or regulations.</li>
          <li>Transmit unsolicited or unauthorised advertising or promotional material.</li>
          <li>Attempt to gain unauthorised access to any part of the website or any server, computer, or database connected to it.</li>
          <li>Upload or transmit any content that is defamatory, offensive, fraudulent, or otherwise objectionable.</li>
          <li>Reproduce, duplicate, copy, or resell any part of our website in contravention of these terms.</li>
        </ul>
      </Section>

      <Section title="3. Intellectual Property">
        <p>
          All content on this website — including text, images, graphics, logos, designs, and audiovisual material — is the property of CNBC Film UK or its licensors and is protected by UK and international intellectual property laws. No content may be reproduced, distributed, or used without our express written permission.
        </p>
        <p>
          The CNBC Film UK name, brand identity, and associated trademarks are proprietary to CNBC Film UK and its parent company. Unauthorised use is strictly prohibited.
        </p>
      </Section>

      <Section title="4. Talent Applications">
        <p>
          By submitting an application through our website or via email, you confirm that all information provided is accurate, complete, and your own. Submission of a talent application does not guarantee representation, casting, or any employment relationship with CNBC Film UK.
        </p>
        <p>
          We reserve the right to retain submitted materials (including headshots, showreels, and CVs) for casting consideration purposes for a period of up to 24 months. You may request removal of your materials at any time by contacting <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>.
        </p>
        <p>
          Any engagement arising from a talent application shall be governed by a separate written agreement between the individual and CNBC Film UK, which shall supersede these terms in respect of that engagement.
        </p>
      </Section>

      <Section title="5. Sponsorship and Commercial Enquiries">
        <p>
          Expressions of interest submitted via our website do not constitute a binding agreement. All sponsorship arrangements are subject to a formal written contract signed by both parties. CNBC Film UK reserves the right to accept or decline any sponsorship or commercial proposal at its absolute discretion.
        </p>
        <p>
          All fees, deliverables, and obligations relating to a sponsorship or commercial partnership shall be set out in the relevant executed agreement, which shall be the governing document for that arrangement.
        </p>
      </Section>

      <Section title="6. Accuracy of Information">
        <p>
          We endeavour to ensure all information on this website is accurate and up to date. However, we make no warranties or representations — express or implied — regarding the completeness, accuracy, or fitness for purpose of any content. Production details, opportunities, and services described are subject to change without notice.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, CNBC Film UK shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any information contained herein. Our total liability to you for any claim arising out of or in connection with these terms shall not exceed £100.
        </p>
        <p>
          Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded by law.
        </p>
      </Section>

      <Section title="8. Third-Party Links">
        <p>
          Our website may contain hyperlinks to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
        </p>
      </Section>

      <Section title="9. Privacy">
        <p>
          Your use of this website is also governed by our <a href="/legal/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>, which is incorporated into these Terms and Conditions by reference. By using our website, you consent to the processing of your data as described therein.
        </p>
      </Section>

      <Section title="10. Governing Law and Jurisdiction">
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </Section>

      <Section title="11. Changes to These Terms">
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website following any changes constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>.
        </p>
      </Section>
    </LegalLayout>
  )
}
