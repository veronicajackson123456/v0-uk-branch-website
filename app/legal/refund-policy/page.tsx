import LegalLayout from '@/components/legal-layout'

export const metadata = {
  title: 'Refund Policy | CNBC Film UK',
  description: 'Refund Policy for CNBC Film UK — our approach to refunds, cancellations, and disputes.',
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

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="CNBC Film UK — Cancellation, Refund & Dispute Resolution Policy"
      lastUpdated="15 May 2026"
    >
      <div className="mb-8 p-6 bg-card border border-gold/30">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          This Refund Policy sets out the terms under which CNBC Film UK considers and processes refund requests in connection with our production, sponsorship, and service engagements. All commercial arrangements with CNBC Film UK are governed by individual written agreements, and the terms of those agreements shall take precedence over this general policy where they conflict. Please read this policy carefully before entering into any commercial relationship with us.
        </p>
      </div>

      <Section title="1. Nature of Our Services">
        <p>
          CNBC Film UK is a film production and broadcasting company. Our services include (but are not limited to) production services, sponsorship packages, talent engagements, broadcasting arrangements, and consultancy. The majority of our commercial engagements are bespoke, project-specific arrangements that involve the deployment of significant resources, third-party commitments, and creative work prior to completion.
        </p>
        <p>
          Given the nature of our business, refunds are not automatically applicable and are assessed on a case-by-case basis in accordance with this policy and the relevant contractual agreement.
        </p>
      </Section>

      <Section title="2. Sponsorship Packages">
        <p>
          Sponsorship fees are payable in accordance with the terms set out in each individual sponsorship agreement. The following general principles apply unless otherwise stated in your specific agreement:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong className="text-foreground">Cancellation more than 60 days before the production start date:</strong> A full refund of any fees paid, less a 15% administration and planning fee.
          </li>
          <li>
            <strong className="text-foreground">Cancellation between 30 and 60 days before the production start date:</strong> A 50% refund of fees paid. The remaining 50% is retained to cover committed third-party costs and resource allocation.
          </li>
          <li>
            <strong className="text-foreground">Cancellation within 30 days of the production start date:</strong> No refund is available. All fees are non-refundable at this stage given the extent of resources deployed.
          </li>
          <li>
            <strong className="text-foreground">Cancellation after production has commenced:</strong> No refund is available. Where deliverables have been partly fulfilled, this will be noted and taken into account in any dispute resolution process.
          </li>
        </ul>
        <p className="mt-3">
          All cancellation requests must be submitted in writing to <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>. Cancellation is not effective until confirmed in writing by CNBC Film UK.
        </p>
      </Section>

      <Section title="3. Production Services">
        <p>
          For clients engaging CNBC Film UK for production, creative, or consultancy services:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Deposits paid to secure production dates or reserve resources are non-refundable once paid.</li>
          <li>Staged payments made in accordance with project milestones are non-refundable for any milestone already delivered or commenced.</li>
          <li>Where a project is cancelled by the client prior to commencement of any work, a refund of any advance fees paid may be considered, less reasonable costs already incurred by CNBC Film UK in preparing for the engagement.</li>
        </ul>
        <p className="mt-3">
          Any costs for third-party contractors, equipment hire, location fees, or other production expenditure already committed at the time of cancellation are non-refundable and will be charged to the client in accordance with the applicable agreement.
        </p>
      </Section>

      <Section title="4. Force Majeure">
        <p>
          If CNBC Film UK is unable to fulfil its obligations under a commercial agreement as a direct result of circumstances beyond our reasonable control — including but not limited to natural disasters, acts of government, pandemic-related restrictions, industrial action, or technical failures — we will endeavour to reschedule the engagement at no additional charge.
        </p>
        <p>
          Where rescheduling is not possible, CNBC Film UK will offer a pro-rata credit or partial refund based on the proportion of services not yet delivered, at our reasonable discretion. Force majeure events do not entitle either party to a full refund where part-services have been delivered.
        </p>
      </Section>

      <Section title="5. Cancellation by CNBC Film UK">
        <p>
          In the exceptional event that CNBC Film UK cancels a confirmed engagement for reasons within our control (other than force majeure), we will provide either:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>A full refund of all fees paid for the undelivered portion of services; or</li>
          <li>An offer to reschedule the engagement on terms agreeable to both parties.</li>
        </ul>
        <p className="mt-3">
          CNBC Film UK&apos;s liability in such circumstances shall be limited to the refund of fees actually paid and shall not extend to any consequential, indirect, or additional losses.
        </p>
      </Section>

      <Section title="6. Consumer Rights">
        <p>
          Where our services are provided to an individual acting as a consumer (as defined under the Consumer Rights Act 2015), you may have statutory rights including the right to cancel a services contract within 14 days of entering into it (the &quot;cooling-off period&quot;), unless the services have already commenced with your agreement.
        </p>
        <p>
          If you have requested that services commence within the 14-day cooling-off period and you subsequently cancel, you may be charged for any services rendered up to the point of cancellation.
        </p>
        <p>
          Nothing in this Refund Policy affects your statutory rights as a consumer under English law. For further information about your consumer rights, please visit the Citizens Advice website at <strong className="text-foreground">citizensadvice.org.uk</strong>.
        </p>
      </Section>

      <Section title="7. Refund Process">
        <p>
          To request a refund or raise a cancellation, please contact us in writing at <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a> with the following information:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Your full name and contact details.</li>
          <li>The name of the company or project to which the arrangement relates.</li>
          <li>A description of the services for which a refund is sought.</li>
          <li>The date and amount of payment(s) made.</li>
          <li>The reason for your cancellation or refund request.</li>
        </ul>
        <p className="mt-3">
          We will acknowledge your request within <strong className="text-foreground">3 working days</strong> and aim to provide a full written response within <strong className="text-foreground">15 working days</strong>. Where a refund is approved, payment will be processed within <strong className="text-foreground">30 days</strong> of confirmation, using the original payment method where possible.
        </p>
      </Section>

      <Section title="8. Dispute Resolution">
        <p>
          We aim to resolve all disputes amicably and promptly. In the first instance, please contact us directly at <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a>. If a resolution cannot be reached through direct negotiation within 30 days, both parties agree to consider formal mediation before pursuing litigation.
        </p>
        <p>
          Any dispute or claim arising out of or in connection with a refund request that cannot be resolved by agreement shall be subject to the exclusive jurisdiction of the courts of England and Wales, in accordance with our <a href="/legal/terms-of-service" className="text-gold hover:underline">Terms of Service</a>.
        </p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>
          CNBC Film UK reserves the right to amend this Refund Policy at any time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of our services following any amendment constitutes acceptance of the revised policy.
        </p>
        <p>
          The terms in force at the time of entering into any commercial agreement shall govern that arrangement, regardless of subsequent amendments to this policy.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          For all refund enquiries, please contact us:
        </p>
        <ul className="list-none space-y-1 mt-3">
          <li><strong className="text-foreground">Email:</strong> <a href="mailto:info@cnbc.film" className="text-gold hover:underline">info@cnbc.film</a></li>
          <li><strong className="text-foreground">Address:</strong> CNBC Film UK, London, United Kingdom</li>
        </ul>
        <p className="mt-3">
          We aim to respond to all refund and cancellation enquiries within 3 working days.
        </p>
      </Section>
    </LegalLayout>
  )
}
