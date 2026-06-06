import type { Metadata } from 'next';
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
    role: 'Founder & CEO',
    bio: 'With 25+ years in the construction industry, Abdul Majeed founded the company with a vision to bring world-class construction standards to Pakistan.',
  },
  {
    name: 'Tariq Hassan',
    role: 'Chief Engineer',
    bio: 'A licensed structural engineer with a Masters from NED University, Tariq leads all technical aspects of project design and execution.',
  },
  {
    name: 'Sara Iqbal',
    role: 'Head of Projects',
    bio: 'Sara brings 12 years of project management expertise, ensuring every project is delivered on schedule and within budget.',
  },
  {
    name: 'Bilal Chaudhry',
    role: 'Lead Architect',
    bio: 'Bilal holds a degree from NCA Lahore and has designed award-winning residential and commercial structures across Islamabad.',
  },
];

const milestones = [
  { year: '2010', event: 'Majeed Builders founded with a team of 8 in Islamabad.' },
  { year: '2013', event: 'Completed first large commercial project — a 6-storey office building in Blue Area.' },
  { year: '2016', event: 'Expanded team to 50+ professionals. Entered the luxury residential segment.' },
  { year: '2019', event: 'Received Best Builder Award by Islamabad Chamber of Commerce.' },
  { year: '2022', event: 'Crossed 150 completed projects. Launched a dedicated project management division.' },
  { year: '2024', event: 'Currently executing 4 simultaneous large-scale projects across Islamabad.' },
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
            Since 2010, Majeed Builders has been at the forefront of construction in Islamabad — delivering
            projects that define the skyline and stand as testaments to quality craftsmanship.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
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
                  Majeed Builders was established in 2010 by Abdul Majeed with a straightforward goal:
                  to build structures that Islamabad would be proud of for generations. Starting with a
                  small team of dedicated professionals, we took on our first residential project in F-7
                  and delivered it three weeks ahead of schedule.
                </p>
                <p>
                  Word spread quickly. By 2013, we had expanded into commercial construction, securing
                  contracts in Blue Area and the central business district. Our reputation for quality
                  materials, honest pricing, and transparent communication became our most powerful
                  marketing tool.
                </p>
                <p>
                  Today, with a team of over 50 engineers, architects, site managers, and skilled
                  workers, we are one of Islamabad&apos;s most recognised construction companies — with
                  a portfolio spanning residential towers, commercial complexes, government housing
                  schemes, and luxury villas.
                </p>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Years Active' },
                { value: '200+', label: 'Projects Delivered' },
                { value: '50+', label: 'Team Members' },
                { value: '12+', label: 'Awards Won' },
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
                <div className="h-44 bg-stone-200 group-hover:bg-amber-50 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-5xl font-black text-stone-400 opacity-40 uppercase">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-stone-900 uppercase text-sm group-hover:text-amber-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-700 text-xs font-semibold uppercase mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed">{member.bio}</p>
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
