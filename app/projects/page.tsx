import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore the complete portfolio of Majeed Builders — residential towers, commercial complexes, government housing schemes, and luxury villas across Islamabad.',
  alternates: { canonical: 'https://majeedbuilders.pk/projects' },
  openGraph: {
    title: 'Our Projects | Majeed Builders',
    description:
      '200+ projects delivered across Islamabad. Browse our residential and commercial construction portfolio.',
    url: 'https://majeedbuilders.pk/projects',
  },
};

export default function ProjectsPage() {
  const completed = projects.filter((p) => p.status === 'Completed');
  const inProgress = projects.filter((p) => p.status === 'In Progress');

  return (
    <>
      {/* Page Hero */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold uppercase">Portfolio</span>
          <h1 className="mt-3 text-5xl font-black text-white uppercase leading-tight">
            Our Projects
          </h1>
          <div className="mt-4 h-[3px] w-12 bg-amber-700" />
          <p className="mt-6 max-w-xl text-stone-300 text-lg leading-relaxed">
            From compact residential homes to large commercial towers — every project reflects our
            commitment to precision, quality, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-amber-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-8 items-center justify-center sm:justify-start text-white text-sm font-semibold uppercase">
            <span>{projects.length} Total Projects</span>
            <span className="text-amber-300">·</span>
            <span>{completed.length} Completed</span>
            <span className="text-amber-300">·</span>
            <span>{inProgress.length} In Progress</span>
          </div>
        </div>
      </section>

      {/* In Progress */}
      {inProgress.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-amber-700 text-xs font-bold uppercase">Active</span>
              <h2 className="mt-2 text-3xl font-black text-stone-900 uppercase">
                Currently In Progress
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-amber-700" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgress.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed */}
      <section className={`py-16 ${inProgress.length > 0 ? 'bg-stone-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-amber-700 text-xs font-bold uppercase">Delivered</span>
            <h2 className="mt-2 text-3xl font-black text-stone-900 uppercase">
              Completed Projects
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-amber-700" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-stone-400 mb-8 leading-relaxed">
            Let&apos;s discuss your requirements. Our team is ready to assess your project
            and provide a detailed, transparent quotation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-700 text-white text-sm font-bold uppercase px-8 py-4 hover:bg-amber-800 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group bg-white border border-stone-200 hover:border-amber-700 transition-colors duration-200 overflow-hidden flex flex-col"
    >
      <div className="h-52 bg-stone-100 relative overflow-hidden flex-shrink-0">
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
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`text-xs font-bold uppercase px-3 py-1 ${
              project.status === 'Completed'
                ? 'bg-green-700 text-white'
                : 'bg-amber-600 text-white'
            }`}
          >
            {project.status}
          </span>
          <span className="text-xs font-bold uppercase px-3 py-1 bg-stone-900/80 text-white">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs text-amber-700 font-bold uppercase mb-2">
          {project.location} · {project.year}
        </div>
        <h3 className="text-lg font-bold text-stone-900 uppercase mb-3 group-hover:text-amber-700 transition-colors">
          {project.name}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-100 text-xs">
          <div>
            <div className="text-stone-400 uppercase">Area</div>
            <div className="text-stone-700 font-semibold mt-0.5">{project.area}</div>
          </div>
          <div>
            <div className="text-stone-400 uppercase">Units</div>
            <div className="text-stone-700 font-semibold mt-0.5">{project.units}</div>
          </div>
        </div>

        <div className="mt-4 text-xs text-amber-700 font-semibold group-hover:underline">
          View Project Details →
        </div>
      </div>
    </Link>
  );
}
