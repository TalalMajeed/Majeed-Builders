import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/button';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Majeed Builders — our story, mission, values, and the expert team behind Islamabad\'s most trusted construction company.',
  alternates: { canonical: 'https://majeedbuilders.com/about' },
  openGraph: {
    title: 'About Us | Majeed Builders',
    description:
      'Over 15 years of building excellence in Islamabad. Meet the team and the values that drive every project we undertake.',
    url: 'https://majeedbuilders.com/about',
  },
};

const values = [
  {
    title: 'Integrity',
    description:
      'We operate with complete transparency — in pricing, timelines, and communication. Honest dealings are non-negotiable.',
  },
  {
    title: 'Quality',
    description:
      'Every brick, beam, and finish is held to the highest standard. We never compromise on the materials or craftsmanship we deliver.',
  },
  {
    title: 'Innovation',
    description:
      'We embrace modern construction technologies and sustainable practices to build smarter and more efficiently.',
  },
  {
    title: 'Community',
    description:
      'We are invested in the growth of Islamabad. Every project we complete contributes to the city we call home.',
  },
];

const team = [
  {
    name: 'Abdul Majeed',
    role: 'Chief Executive Officer',
    bio: 'Founder of Majeed Builders, leading every project with hands-on involvement and a commitment to quality.',
    image: '/team/abdulmajeed.webp',
  },
  {
    name: 'Tahir Majeed',
    role: 'Partner',
    bio: 'Oversees daily operations and client relations, ensuring smooth delivery across all active projects.',
    image: '/team/tahirmajeed.webp',
  },
  {
    name: 'Tariq Majeed',
    role: 'Consultant',
    bio: 'Guides technical and structural decisions, bringing deep construction expertise to every build.',
    image: '/team/tariqmajeed.webp',
  },
  {
    name: 'Mian Majeed',
    role: 'Marketing',
    bio: 'Leads brand outreach and client acquisition, connecting the right people to the right projects.',
    image: '/team/placeholder.webp',
  },
];

const milestones = [
  { year: '2020', event: 'Majeed Builders (Partnership) founded in Islamabad by Abdul Majeed.' },
  { year: '2021', event: 'Completed first residential project — a 1 Kanal, 2-floor home in Bahria Enclave Sector C.' },
  { year: '2022', event: 'Delivered two more projects in Bahria Enclave: an 8 Marla home in Sector G and a 10 Marla home in Sector M.' },
  { year: '2023', event: 'Expanded portfolio with a 5 Marla home in Sector M and grew the team to 25+ professionals.' },
  { year: '2024', event: 'Broke ground on new projects in Park View City (Overseas Block) and Saif Garden, Islamabad.' },
  { year: '2025', event: 'Continuing to execute simultaneous projects with 100% client satisfaction across all completed builds.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold uppercase">About Us</span>
          <h1 className="mt-3 text-5xl font-black text-white uppercase leading-tight">
            Built on Trust.<br />
            <span className="text-amber-500">Built to Last.</span>
          </h1>
          <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          <p className="mt-6 max-w-2xl text-stone-300 text-lg leading-relaxed">
            Since 2020, Majeed Builders has been delivering residential construction projects across
            Islamabad — built on trust, quality craftsmanship, and complete client satisfaction.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-amber-700 text-xs font-bold uppercase">The People</span>
            <h2 className="mt-3 text-4xl font-black text-stone-900 uppercase">
              Meet Our Leadership
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-stone-50 border border-stone-200 overflow-hidden group hover:border-amber-700 transition-colors">
                <div className="h-96 sm:h-72 relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-stone-900 uppercase text-sm group-hover:text-amber-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-700 text-xs font-semibold uppercase mt-1 mb-2">
                    {member.role}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase">Our Story</span>
              <h2 className="mt-3 text-4xl font-black text-stone-900 uppercase">
                From Foundations to Skylines
              </h2>
              <div className="mt-4 h-[3px] w-12 bg-amber-700 mb-8" />
              <div className="space-y-5 text-stone-600 leading-relaxed">
                <p>
                  Majeed Builders was established in 2020 by Abdul Majeed as a partnership firm with a
                  straightforward goal: to build homes in Islamabad that families would be proud of for
                  generations. Starting in Bahria Enclave, we completed our first 1 Kanal residential
                  project and delivered it to full client satisfaction.
                </p>
                <p>
                  Word spread quickly within the community. We went on to deliver multiple projects
                  across Bahria Enclave — ranging from 5 Marla to 1 Kanal homes — each completed to the
                  same standard of quality, transparency, and honest pricing.
                </p>
                <p>
                  Today, with a growing team of 25+ professionals and ongoing projects in Park View City
                  and Saif Garden, Majeed Builders continues to be a trusted name for residential
                  construction across Islamabad.
                </p>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '6+', label: 'Years Active' },
                { value: '6+', label: 'Projects Delivered' },
                { value: '25+', label: 'Team Members' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="bg-stone-50 border border-stone-200 p-8 text-center">
                  <div className="text-4xl font-black text-amber-700">{stat.value}</div>
                  <div className="text-xs text-stone-500 font-semibold uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200">
            <div className="p-10 border-r border-stone-200">
              <div className="h-1 w-10 bg-amber-700 mb-6" />
              <h3 className="text-2xl font-black text-stone-900 uppercase mb-4">
                Our Mission
              </h3>
              <p className="text-stone-600 leading-relaxed">
                To deliver construction projects of the highest quality, on time and within budget,
                while maintaining complete transparency with our clients. We aim to be the most trusted
                name in construction across Pakistan.
              </p>
            </div>
            <div className="p-10">
              <div className="h-1 w-10 bg-amber-700 mb-6" />
              <h3 className="text-2xl font-black text-stone-900 uppercase mb-4">
                Our Vision
              </h3>
              <p className="text-stone-600 leading-relaxed">
                To shape the built environment of Pakistan — creating spaces where families thrive,
                businesses grow, and communities flourish. We envision a Pakistan built to international
                standards, one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-amber-700 text-xs font-bold uppercase">What Drives Us</span>
            <h2 className="mt-3 text-4xl font-black text-stone-900 uppercase">
              Our Core Values
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={value.title} className="p-8 bg-stone-50 border border-stone-200 hover:border-amber-700 transition-colors group">
                <div className="text-amber-700 font-black text-4xl mb-4 leading-none">0{i + 1}</div>
                <h3 className="text-stone-900 font-bold uppercase text-sm mb-3 group-hover:text-amber-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-amber-500 text-xs font-bold uppercase">Our Journey</span>
            <h2 className="mt-3 text-4xl font-black text-white uppercase">
              Key Milestones
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          </div>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex gap-8 items-start py-7 ${i < milestones.length - 1 ? 'border-b border-stone-800' : ''}`}
              >
                <div className="text-amber-500 font-black text-xl w-14 flex-shrink-0">{m.year}</div>
                <div className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 bg-amber-700 rounded-full flex-shrink-0" />
                  <p className="text-stone-300 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-4">
            Work With Our Team
          </h2>
          <p className="text-amber-100 mb-8 leading-relaxed">
            Whether you have a project in mind or just want to learn more about what we do,
            we&apos;d love to hear from you.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
