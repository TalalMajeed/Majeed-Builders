import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Majeed Builders Privacy Policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://majeedbuilders.pk/privacy' },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you contact us through our website, request a quote, or otherwise interact with our services, we may collect the following types of information:

• **Personal identification information** – your full name, email address, phone number, and postal address.
• **Project information** – details about your construction requirements, location, budget, and timeline that you voluntarily provide.
• **Communication data** – records of correspondence between you and Majeed Builders, including emails, form submissions, and phone enquiries.
• **Usage data** – anonymous information about how you navigate our website, such as pages visited, time spent, and browser type, collected via standard server logs.

We do not collect sensitive personal information such as financial account details, national identity numbers, or health information unless explicitly required and requested.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information collected solely for legitimate business purposes related to our construction services:

• To respond to your enquiries and provide requested information or quotes.
• To communicate project updates, timelines, and relevant service information.
• To improve the quality of our website and user experience.
• To comply with applicable legal and regulatory obligations.
• To send service-related communications you have opted into.

We do not use your personal data for automated decision-making or profiling.`,
  },
  {
    title: '3. How We Protect Your Information',
    content: `Majeed Builders takes the security of your personal data seriously. We implement appropriate technical and organisational measures to protect your information against unauthorised access, accidental loss, alteration, or disclosure.

These measures include:

• Secure, encrypted transmission of data (HTTPS/TLS protocols).
• Access controls limiting personal data to authorised personnel only.
• Regular review of our data handling and security practices.

While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet or electronic storage is 100% secure.`,
  },
  {
    title: '4. Sharing of Your Information',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your data in the following limited circumstances only:

• **Service providers** – trusted partners who assist in operating our website or conducting our business, provided they agree to keep your information confidential.
• **Legal requirements** – when required to disclose information by law, court order, or government authority.
• **Business transfers** – in the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.

In all cases, we take reasonable steps to ensure your information remains protected.`,
  },
  {
    title: '5. Cookies and Tracking',
    content: `Our website uses essential cookies to ensure basic functionality. These cookies do not collect personally identifiable information and are necessary for the site to operate correctly.

We do not currently use third-party tracking cookies, advertising cookies, or analytics platforms that transmit personal data to external services.

You may disable cookies through your browser settings, though this may affect your experience on our site.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the following rights regarding your personal information:

• **Access** – you may request a copy of the personal data we hold about you.
• **Correction** – you may request that inaccurate or incomplete data be corrected.
• **Deletion** – you may request that we delete your personal data, subject to any legal obligations requiring us to retain it.
• **Objection** – you may object to the processing of your personal data for marketing purposes at any time.

To exercise any of these rights, please contact us at the details provided below.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Enquiry data is typically retained for a maximum of three years unless you enter into a contractual relationship with us, in which case data is retained for the duration of the relationship and up to seven years thereafter.`,
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policy of any external site you visit.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately so we can delete it.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold uppercase">Legal</span>
          <h1 className="mt-3 text-4xl font-black text-white uppercase">
            Privacy Policy
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
              Majeed Builders (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website at{' '}
              <strong>majeedbuilders.pk</strong> or engage with our construction services.
              Please read this policy carefully.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-stone-100 pb-10 last:border-0">
                <h2 className="text-lg font-black text-stone-900 uppercase mb-4">
                  {section.title}
                </h2>
                <div className="text-stone-600 leading-relaxed text-sm whitespace-pre-line">
                  {section.content.split('\n').map((line, i) => {
                    if (line.startsWith('• ')) {
                      const content = line.slice(2);
                      const boldMatch = content.match(/^\*\*(.+?)\*\*\s*–\s*(.+)/);
                      return (
                        <div key={i} className="flex gap-3 mb-2">
                          <span className="text-amber-700 flex-shrink-0 mt-0.5">•</span>
                          <span>
                            {boldMatch ? (
                              <>
                                <strong>{boldMatch[1]}</strong> – {boldMatch[2]}
                              </>
                            ) : (
                              content
                            )}
                          </span>
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

          {/* Contact */}
          <div className="mt-12 p-6 bg-stone-50 border border-stone-200">
            <h2 className="text-base font-black text-stone-900 uppercase mb-3">
              Contact Us About Privacy
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="space-y-1 text-sm text-stone-700">
              <div><strong>Majeed Builders</strong></div>
              <div>Plot 45, Street 7, F-8/2, Islamabad, Pakistan</div>
              <div>
                Email:{' '}
                <a href="mailto:privacy@majeedbuilders.pk" className="text-amber-700 hover:underline">
                  privacy@majeedbuilders.pk
                </a>
              </div>
              <div>Phone: +92 51 345 6789</div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Link href="/terms" className="text-amber-700 text-sm font-semibold hover:underline">
              View Terms of Service →
            </Link>
            <Link href="/contact" className="text-amber-700 text-sm font-semibold hover:underline">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
