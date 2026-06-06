'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useNavigation } from '../navigation';
import Button from '../button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const { navigate } = useNavigation();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
    navigate(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={[
        'text-sm font-semibold uppercase transition-colors duration-150 relative group',
        isActive ? 'text-amber-700' : 'text-stone-700 hover:text-amber-700',
      ].join(' ')}
    >
      {label}
      <span
        className={[
          'absolute -bottom-1 left-0 h-[2px] bg-amber-700 transition-all duration-200',
          isActive ? 'w-full' : 'w-0 group-hover:w-full',
        ].join(' ')}
      />
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const { navigate } = useNavigation();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
    navigate(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={[
        'w-full py-4 px-4 text-sm font-semibold uppercase tracking-wide transition-colors duration-150 active:bg-stone-200',
        isActive ? 'text-amber-700 bg-amber-50' : 'text-stone-700 hover:bg-stone-50',
      ].join(' ')}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Majeed Builders — Home"
            >
              <img src="/logo.svg" alt="Majeed Builders" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="flex-1 hidden md:flex items-center justify-end">
            <Button href="/contact" size="sm" className="h-12 px-6 text-sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 -mr-1 text-stone-700 hover:text-amber-700 transition-colors cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-7 flex flex-col gap-[5px]">
              <span className={`block h-[2.5px] bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
              <span className={`block h-[2.5px] bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2.5px] bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </nav>
          <div className="px-4 py-5 border-t border-stone-100">
            <Button href="/contact" size="sm" fullWidth className="py-4" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
