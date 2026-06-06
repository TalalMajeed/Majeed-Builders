import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  alternates: { canonical: 'https://majeedbuilders.pk' },
};

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Expert Team Members' },
  { value: '100%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: '🏗',
    title: 'Residential Construction',
    description:
      'From single-family homes to large apartment complexes, we build living spaces that stand the test of time.',
  },
  {
    icon: '🏢',
    title: 'Commercial Buildings',
    description:
      'Office towers, retail centres, and industrial facilities designed for function, efficiency, and longevity.',
  },
  {
    icon: '🔨',
    title: 'Renovation & Remodeling',
    description:
      'Breathe new life into existing structures with our expert renovation and interior remodeling services.',
  },
  {
    icon: '📐',
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
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.png"
            alt="Majeed Builders construction site"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/65" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-amber-500 text-xs font-bold uppercase border border-amber-500/50 px-4 py-2">
              Islamabad, Pakistan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none mb-6">
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
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-stone-900">
              Get a Free Quote
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-[1px] h-10 bg-stone-400/60 animate-pulse" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-amber-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-4xl font-black">{stat.value}</div>
                <div className="text-amber-200 text-xs font-semibold uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
                <div className="text-3xl mb-5">{service.icon}</div>
                <h3 className="text-base font-bold text-stone-900 uppercase mb-3 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-stone-400 text-5xl font-black uppercase opacity-30">
                      {project.category === 'Commercial' ? '🏢' : '🏠'}
                    </span>
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

      {/* Why Choose Us */}
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

      {/* CTA */}
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
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 px-8 py-4 text-base bg-white text-amber-800 hover:bg-amber-50 active:bg-amber-100"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
