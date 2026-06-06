import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Majeed Builders Terms of Service — the terms and conditions governing use of our website and construction services.',
  alternates: { canonical: 'https://majeedbuilders.pk/terms' },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Majeed Builders website at majeedbuilders.pk ("the Site") or by engaging our construction services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Site or our services.

These Terms apply to all visitors, clients, contractors, and any other parties who access our Site or engage with Majeed Builders in any capacity.`,
  },
  {
    title: '2. Services',
    content: `Majeed Builders provides construction and project management services including, but not limited to:

• Residential construction (homes, apartments, housing societies)
• Commercial construction (offices, retail, industrial facilities)
• Renovation and remodelling
• Structural engineering consultation
• Interior finishing and fit-out

The specific scope, deliverables, timeline, and pricing for any construction project are governed by a separate written contract agreed upon between Majeed Builders and the client. Nothing on this website constitutes a binding contractual offer.`,
  },
  {
    title: '3. Quotations and Contracts',
    content: `Any quotation provided by Majeed Builders — whether through this website, email, phone, or in person — is an estimate only and is not a binding contract. A formal written agreement signed by both parties is required before any construction work commences.

Quotations are valid for 30 days from the date of issue unless otherwise stated. Majeed Builders reserves the right to revise quotations based on changes in material costs, project scope, or site conditions.`,
  },
  {
    title: '4. Website Use',
    content: `You agree to use this website only for lawful purposes. You must not:

• Use the Site in any way that violates applicable local, national, or international laws.
• Transmit any unsolicited or unauthorised advertising or promotional material.
• Attempt to gain unauthorised access to any part of the Site or its related systems.
• Use the Site to transmit harmful, offensive, or defamatory content.
• Reproduce, duplicate, or copy any part of the Site without our written permission.

We reserve the right to restrict or terminate access to the Site for any user who violates these Terms.`,
  },
  {
    title: '5. Intellectual Property',
    content: `All content on this website — including text, graphics, logos, photographs, and design — is the property of Majeed Builders or its content suppliers and is protected under applicable copyright and intellectual property laws.

You may view and print pages from this Site for personal, non-commercial use. You may not reproduce, republish, distribute, or commercially exploit any content from this Site without our prior written consent.`,
  },
  {
    title: '6. Disclaimer of Warranties',
    content: `The information on this website is provided on an "as is" basis without warranties of any kind, either express or implied. Majeed Builders does not warrant that:

• The Site will be uninterrupted, error-free, or free of viruses or other harmful components.
• The information on the Site is complete, accurate, or current.
• Any specific results will be achieved from the use of our services.

Project outcomes are subject to many factors including site conditions, client decisions, regulatory approvals, and force majeure events.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the fullest extent permitted by applicable law, Majeed Builders shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of:

• Your use of or inability to use this website.
• Errors or omissions in the website content.
• Delays, interruptions, or failures in our services beyond our reasonable control.

Our total liability for any claim arising from the use of this Site shall not exceed PKR 10,000. For liability related to construction contracts, terms are governed by the specific written agreement between the parties.`,
  },
  {
    title: '8. Third-Party Links',
    content: `This Site may contain links to third-party websites or resources. These links are provided for convenience only. Majeed Builders does not endorse and has no control over the content, privacy policies, or practices of any third-party sites. We accept no responsibility or liability for any content, actions, or practices of linked websites.`,
  },
  {
    title: '9. Privacy',
    content: `Your use of this website and our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data collection and handling practices.`,
  },
  {
    title: '10. Indemnification',
    content: `You agree to indemnify and hold harmless Majeed Builders, its directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from your use of the Site, your violation of these Terms, or your infringement of any third-party rights.`,
  },
  {
    title: '11. Modifications to Terms',
    content: `Majeed Builders reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site following any changes constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: '12. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any disputes arising from these Terms or your use of our website or services shall be subject to the exclusive jurisdiction of the courts of Islamabad, Pakistan.`,
  },
  {
    title: '13. Contact',
    content: `If you have questions about these Terms, please contact us at:

Majeed Builders
Plot 45, Street 7, F-8/2, Islamabad, Pakistan
Email: legal@majeedbuilders.pk
Phone: +92 51 345 6789`,
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold tracking-[0.35em] uppercase">Legal</span>
          <h1 className="mt-3 text-4xl font-black text-white uppercase tracking-tight">
            Terms of Service
          </h1>
          <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          <p className="mt-5 text-stone-400 text-sm">
            Effective Date: <strong className="text-stone-300">1 January 2024</strong>
            &nbsp;·&nbsp; Last Updated: <strong className="text-stone-300">1 June 2025</strong>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-10 p-6 bg-amber-50 border-l-4 border-amber-700">
            <p className="text-stone-700 leading-relaxed text-sm">
              Please read these Terms of Service carefully before using the Majeed Builders website
              or engaging our construction services. By accessing our Site or contracting our services,
              you confirm that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-stone-100 pb-10 last:border-0">
                <h2 className="text-lg font-black text-stone-900 uppercase tracking-tight mb-4">
                  {section.title}
                </h2>
                <div className="text-stone-600 leading-relaxed text-sm">
                  {section.content.split('\n').map((line, i) => {
                    if (line.startsWith('• ')) {
                      return (
                        <div key={i} className="flex gap-3 mb-2">
                          <span className="text-amber-700 flex-shrink-0 mt-0.5">•</span>
                          <span>{line.slice(2)}</span>
                        </div>
                      );
                    }
                    if (line.trim() === '') return <br key={i} />;
                    return <p key={i} className="mb-3">{line}</p>;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer links */}
          <div className="mt-12 p-6 bg-stone-50 border border-stone-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-stone-500 text-sm">
              Questions about these Terms?{' '}
              <Link href="/contact" className="text-amber-700 font-semibold hover:underline">
                Contact our team
              </Link>
            </p>
            <Link href="/privacy" className="text-amber-700 text-sm font-semibold hover:underline flex-shrink-0">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
