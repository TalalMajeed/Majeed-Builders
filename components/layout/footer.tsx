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

const services = [
  'Residential Construction',
  'Commercial Buildings',
  'Renovation & Remodeling',
  'Project Management',
  'Interior Finishing',
  'Structural Engineering',
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-amber-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs tracking-tight">MB</span>
              </div>
              <div className="leading-none">
                <div className="font-black text-white text-sm tracking-widest uppercase">Majeed</div>
                <div className="font-light text-stone-400 text-[10px] tracking-[0.3em] uppercase">Builders</div>
              </div>
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
            <h3 className="text-white font-bold text-xs tracking-[0.25em] uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-amber-500 text-sm transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="text-amber-700 text-xs">&#9656;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xs tracking-[0.25em] uppercase">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-stone-400 text-sm flex items-center gap-2">
                  <span className="text-amber-700 text-xs">&#9656;</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xs tracking-[0.25em] uppercase">Contact Us</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex gap-3">
                <span className="text-amber-700 mt-0.5 flex-shrink-0">&#9679;</span>
                <span>Plot 45, Street 7, F-8/2,<br />Islamabad, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 mt-0.5 flex-shrink-0">&#9679;</span>
                <a href="tel:+925134567890" className="hover:text-amber-500 transition-colors">
                  +92 51 345 6789
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 mt-0.5 flex-shrink-0">&#9679;</span>
                <a href="mailto:info@majeedbuilders.pk" className="hover:text-amber-500 transition-colors break-all">
                  info@majeedbuilders.pk
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 mt-0.5 flex-shrink-0">&#9679;</span>
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs tracking-wide">
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
