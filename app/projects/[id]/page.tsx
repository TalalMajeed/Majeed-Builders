import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, getProjectById } from '@/lib/projects';
import Button from '@/components/button';

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `https://majeedbuilders.pk/projects/${project.id}` },
    openGraph: {
      title: `${project.name} | Majeed Builders`,
      description: project.description,
      url: `https://majeedbuilders.pk/projects/${project.id}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const related = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-stone-100 border-b border-stone-200 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-stone-500 font-semibold uppercase">
          <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/projects" className="hover:text-amber-700 transition-colors">Projects</Link>
          <span>›</span>
          <span className="text-stone-700">{project.name}</span>
        </div>
      </nav>

      {/* Project Hero */}
      <section className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs font-bold uppercase px-3 py-1 ${
                project.status === 'Completed'
                  ? 'bg-green-700 text-white'
                  : 'bg-amber-600 text-white'
              }`}
            >
              {project.status}
            </span>
            <span className="text-xs font-bold uppercase px-3 py-1 bg-stone-700 text-stone-200">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            {project.name}
          </h1>
          <div className="h-[3px] w-12 bg-amber-700 mb-6" />
          <p className="max-w-2xl text-stone-300 text-lg leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="h-80 sm:h-96 bg-stone-200 border-b border-stone-300 relative flex items-center justify-center overflow-hidden">
        <span className="text-8xl opacity-20">{project.category === 'Commercial' ? '🏢' : '🏠'}</span>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-700" />
      </div>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-black text-stone-900 uppercase mb-6">
                  Project Highlights
                </h2>
                <div className="h-[2px] w-10 bg-amber-700 mb-6" />
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-4 text-stone-700">
                      <span className="mt-1 w-5 h-5 bg-amber-700 text-white text-[10px] flex items-center justify-center flex-shrink-0 font-bold">
                        ✓
                      </span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-black text-stone-900 uppercase mb-6">
                  About This Project
                </h2>
                <div className="h-[2px] w-10 bg-amber-700 mb-6" />
                <p className="text-stone-600 leading-relaxed text-base">{project.description}</p>
              </div>
            </div>

            {/* Sidebar stats */}
            <div className="space-y-0 border border-stone-200 self-start">
              {[
                { label: 'Client', value: project.client },
                { label: 'Location', value: project.location },
                { label: 'Year', value: String(project.year) },
                { label: 'Total Area', value: project.area },
                { label: 'Units / Floors', value: project.units },
                { label: 'Category', value: project.category },
                { label: 'Status', value: project.status },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  className={`px-6 py-4 flex flex-col gap-0.5 ${i < arr.length - 1 ? 'border-b border-stone-200' : ''} ${i % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}
                >
                  <span className="text-[10px] font-bold text-stone-400 uppercase">
                    {item.label}
                  </span>
                  <span className="text-stone-800 font-semibold text-sm">{item.value}</span>
                </div>
              ))}
              <div className="p-6 bg-amber-700">
                <Button href="/contact" variant="secondary" fullWidth>
                  Enquire About This Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-stone-900 uppercase mb-2">
              Related Projects
            </h2>
            <div className="h-[2px] w-10 bg-amber-700 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group bg-white border border-stone-200 hover:border-amber-700 transition-colors p-6 flex gap-5 items-start"
                >
                  <div className="w-16 h-16 bg-stone-100 border border-stone-200 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-amber-50 transition-colors">
                    {p.category === 'Commercial' ? '🏢' : '🏠'}
                  </div>
                  <div>
                    <div className="text-xs text-amber-700 font-bold uppercase mb-1">
                      {p.category} · {p.year}
                    </div>
                    <div className="font-bold text-stone-900 uppercase text-sm group-hover:text-amber-700 transition-colors mb-1">
                      {p.name}
                    </div>
                    <div className="text-xs text-stone-400">{p.location}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back nav */}
      <div className="bg-white border-t border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button href="/projects" variant="ghost">
            ← Back to All Projects
          </Button>
        </div>
      </div>
    </>
  );
}
