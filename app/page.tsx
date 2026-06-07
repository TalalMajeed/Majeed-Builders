import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button';
import { projects } from '@/lib/projects';
import StatsBar from '@/components/stats';

export const metadata: Metadata = {
  alternates: { canonical: 'https://majeedbuilders.com' },
};

const services = [
  {
    icon: '/icons/house.png',
    title: 'Residential Construction',
    description:
      'From single-family homes to large apartment complexes, we build living spaces that stand the test of time.',
  },
  {
    icon: '/icons/crane.png',
    title: 'Commercial Buildings',
    description:
      'Office towers, retail centres, and industrial facilities designed for function, efficiency, and longevity.',
  },
  {
    icon: '/icons/blueprint.png',
    title: 'Renovation & Remodeling',
    description:
      'Breathe new life into existing structures with our expert renovation and interior remodeling services.',
  },
  {
    icon: '/icons/planning.png',
    title: 'Project Management',
    description:
      'End-to-end project oversight ensuring on-time delivery, cost control, and uncompromising quality.',
  },
];

const whyUs = [
  {
    title: 'Premium Materials',
    description: 'We source only certified, grade-A construction materials from trusted suppliers.',
  },
  {
    title: 'Expert Engineers',
    description: 'Our team of licensed engineers and architects brings decades of combined expertise.',
  },
  {
    title: 'On-Time Delivery',
    description: 'Strict project schedules and milestone tracking ensure we never miss a deadline.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear, itemised quotations with no hidden costs — you always know where your money goes.',
  },
];

const featuredProjects = projects.slice(0, 3);



export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[93svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
    <Image
      src="/background.webp"
      alt="Majeed Builders construction site"
      fill
      priority
      className="object-cover object-top"
    />
          <div className="absolute inset-0 bg-stone-900/65" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-none mb-6">
            Building Your<br />
            <span className="text-amber-500">Vision</span> Into<br />
            Reality
          </h1>
          <p className="max-w-xl mx-auto text-stone-300 text-lg mb-10 leading-relaxed">
            Pakistan&apos;s trusted construction partner for residential and commercial projects.
            Quality craftsmanship delivered on time, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/projects" size="lg">
              View Our Projects
            </Button>
            <Button href="/contact" variant="light" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-[1px] h-10 bg-stone-400/60 animate-pulse" />
        </div>
      </section>

      <StatsBar />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-xl">
            <span className="text-amber-700 text-xs font-bold uppercase">What We Do</span>
            <h2 className="mt-3 text-4xl font-black text-stone-900 uppercase leading-tight">
              Our Core Services
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-stone-200">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`p-8 hover:bg-amber-50 transition-colors duration-200 group ${
                  i < services.length - 1 ? 'border-r border-stone-200' : ''
                } border-b border-stone-200 lg:border-b-0`}
              >
                <div className="relative w-10 h-10 mb-5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-stone-900 uppercase mb-3 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase">Portfolio</span>
              <h2 className="mt-3 text-4xl font-black text-stone-900 uppercase leading-tight">
                Featured Projects
              </h2>
              <div className="mt-4 h-[3px] w-12 bg-amber-700" />
            </div>
            <Button href="/projects" variant="outline">
              All Projects →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-white border border-stone-200 hover:border-amber-700 transition-colors duration-200 overflow-hidden"
              >
                <div className="h-52 bg-stone-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-stone-200 group-hover:bg-amber-50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 grayscale">
                    <Image
                      src={project.category === 'Commercial' ? '/icons/crane.png' : '/icons/house.png'}
                      alt={project.category}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-bold uppercase px-3 py-1 ${
                        project.status === 'Completed'
                          ? 'bg-green-700 text-white'
                          : 'bg-amber-600 text-white'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-amber-700 font-bold uppercase mb-2">
                    {project.category} · {project.year}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 uppercase mb-2 group-hover:text-amber-700 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>{project.location}</span>
                    <span className="text-amber-700 font-semibold group-hover:underline">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-xl">
            <span className="text-amber-500 text-xs font-bold uppercase">Why Us</span>
            <h2 className="mt-3 text-4xl font-black text-white uppercase leading-tight">
              The Majeed Builders Difference
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <div key={item.title} className="flex gap-5 p-6 border border-stone-700 hover:border-amber-700 transition-colors duration-200">
                <div className="text-amber-700 font-black text-2xl flex-shrink-0 leading-none">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white uppercase mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-amber-100 text-lg mb-10 leading-relaxed">
            Talk to our team today. We&apos;ll assess your requirements and provide a free,
            no-obligation quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us Now
            </Button>
            <Button href="/projects" variant="light" size="lg">
              Browse Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
