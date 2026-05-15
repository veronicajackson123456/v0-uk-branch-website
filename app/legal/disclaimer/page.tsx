import LegalLayout from '@/components/legal-layout'

export const metadata = {
  title: 'Disclaimer | CNBC Film UK',
  description: 'Disclaimer for CNBC Film UK — important information about the use of our website and services.',
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

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="CNBC Film UK — Important information about the use of our website and services"
      lastUpdated="15 May 2026"
    >
      <div className="mb-8 p-6 bg-card border border-gold/30">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Please read this disclaimer carefully before using the CNBC Film UK website at <strong className="text-foreground">cnbc.film</strong>. By accessing and using this website, you accept and agree to be bound by the notices and limitations set out below. This disclaimer should be read alongside our <a href="/legal/terms-of-service" className="text-gold hover:underline">Terms of Service</a> and <a href="/legal/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>.
        </p>
      </div>

      <Section title="1. General Information Only">
        <p>
          The content published on this website is provided for general informational purposes only. CNBC Film UK makes no warranties, representations, or guarantees — express or implied — as to the accuracy, completeness, timeliness, suitability, or reliability of any information, products, services, or related content found on this website.
        </p>
        <p>
          Information on this website is subject to change without notice. Any reliance you place on such information is strictly at your own risk.
        </p>
      </Section>

      <Section title="2. No Professional Advice">
        <p>
          Nothing on this website constitutes or should be construed as professional, legal, financial, investment, tax, or any other form of regulated advice. CNBC Film UK is a film production and broadcasting company, not a financial institution, legal firm, or regulated advisory service.
        </p>
        <p>
          If you require professional advice in any of these areas, you should consult a suitably qualified and authorised professional. We expressly disclaim any responsibility for decisions made based on content found on this website.
        </p>
      </Section>

      <Section title="3. Accuracy of Information">
        <p>
          Whilst we endeavour to keep all information on this website accurate and current, we do not guarantee that the website will be free from errors or omissions, or that defects will be corrected. Production details, casting opportunities, service descriptions, partner information, and other content are subject to change at any time without prior notice.
        </p>
        <p>
          We reserve the right to correct any errors or inaccuracies on the website at any time without liability.
        </p>
      </Section>

      <Section title="4. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, CNBC Film UK, its directors, officers, employees, agents, and licensors shall not be liable for any:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Direct, indirect, incidental, special, consequential, or punitive loss or damage;</li>
          <li>Loss of profits, revenue, data, goodwill, or business opportunities;</li>
          <li>Damage arising from your reliance on any content on this website;</li>
          <li>Technical failures, interruptions to website availability, or data loss;</li>
          <li>Unauthorised access to, or alteration of, your data or transmissions;</li>
          <li>Any conduct of third parties using this website.</li>
        </ul>
        <p className="mt-3">
          Nothing in this disclaimer excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot lawfully be excluded or limited.
        </p>
      </Section>

      <Section title="5. Website Availability">
        <p>
          CNBC Film UK does not guarantee uninterrupted or error-free access to this website. The website may be subject to scheduled maintenance, technical issues, or disruptions beyond our reasonable control. We are not liable for any loss or inconvenience arising from the unavailability of the website at any time.
        </p>
      </Section>

      <Section title="6. Third-Party Links & Content">
        <p>
          This website may contain hyperlinks to third-party websites and external resources. These links are provided for your convenience and information only. CNBC Film UK does not endorse, control, or accept responsibility for the content, accuracy, availability, or practices of any linked third-party websites. We strongly encourage you to review the terms, privacy policies, and disclaimers of any external site before using it.
        </p>
        <p>
          The inclusion of any external link does not imply endorsement, recommendation, or approval by CNBC Film UK.
        </p>
      </Section>

      <Section title="7. Intellectual Property Disclaimer">
        <p>
          All trade marks, logos, and brand marks displayed on this website are the property of CNBC Film UK or their respective owners. Nothing on this website shall be construed as granting any licence or right to use any trade mark or intellectual property without the express written permission of the owner.
        </p>
        <p>
          Unauthorised reproduction, distribution, or use of any materials on this website may constitute an infringement of our intellectual property rights and may result in civil and/or criminal liability.
        </p>
      </Section>

      <Section title="8. User-Submitted Content">
        <p>
          CNBC Film UK is not responsible for the accuracy, legality, or appropriateness of any information submitted by users, including talent applications, contact form submissions, or any other user-generated content. We do not endorse any views or opinions expressed by individuals in such submissions.
        </p>
        <p>
          We reserve the right to reject, remove, or discard any submitted content that we deem to be inappropriate, misleading, or in violation of our policies, without notice or liability.
        </p>
      </Section>

      <Section title="9. Security Disclaimer">
        <p>
          Whilst we implement appropriate technical and organisational security measures to protect data transmitted to and from our website, no method of internet transmission or electronic storage is completely secure. You acknowledge that transmission of data over the internet carries inherent risks, and you do so at your own risk.
        </p>
        <p>
          CNBC Film UK is not liable for any interception or alteration of data transmitted via the internet that is beyond our reasonable control.
        </p>
      </Section>

      <Section title="10. Changes to This Disclaimer">
        <p>
          We reserve the right to amend this disclaimer at any time without prior notice. Changes will be effective immediately upon posting to this page with an updated &quot;Last updated&quot; date. Your continued use of this website following any amendments constitutes your acceptance of the updated disclaimer.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          This disclaimer is governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with this disclaimer shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          If you have any questions or concerns about this disclaimer, please contact us:
        </p>
        <ul className="list-none space-y-1 mt-3">
          <li><strong className="text-foreground">Email:</strong> <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a></li>
          <li><strong className="text-foreground">Address:</strong> CNBC Film UK, London, United Kingdom</li>
        </ul>
      </Section>
    </LegalLayout>
  )
}
