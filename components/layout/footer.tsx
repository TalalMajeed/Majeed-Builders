import Link from 'next/link';

const currentYear = new Date().getFullYear();

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Our Projects' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

const projectLinks = [
  { href: '/projects/residential', label: 'Residential Homes' },
  { href: '/projects/commercial', label: 'Commercial Buildings' },
  { href: '/projects/renovation', label: 'Renovation Projects' },
  { href: '/projects/interiors', label: 'Interior Finishing' },
  { href: '/projects/structural', label: 'Structural Works' },
  { href: '/projects', label: 'View All Projects' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center">
              <img src="/logo.svg" alt="Majeed Builders" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Building excellence across Islamabad since 2010. Your trusted partner for residential
              and commercial construction projects.
            </p>
            <div className="pt-2">
              <div className="h-[2px] w-10 bg-amber-700" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xs uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-amber-500 text-sm transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xs uppercase">Our Projects</h3>
            <ul className="space-y-2">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-amber-500 text-sm transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xs uppercase">Contact Us</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0 mt-1.5" />
                <span>Plot 45, Street 7, F-8/2,<br />Islamabad, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0 mt-1.5" />
                <a href="tel:+925134567890" className="hover:text-amber-500 transition-colors">
                  +92 51 345 6789
                </a>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0 mt-1.5" />
                <a href="mailto:info@majeedbuilders.com" className="hover:text-amber-500 transition-colors break-all">
                  info@majeedbuilders.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 flex-shrink-0 mt-1.5" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">
            &copy; {currentYear} Majeed Builders. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-500 hover:text-amber-500 text-xs transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
