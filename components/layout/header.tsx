'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useNavigation } from '../navigation-provider';
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Majeed Builders — Home"
          >
            <div className="w-8 h-8 bg-amber-700 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs">MB</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-stone-900 text-sm uppercase">
                Majeed
              </span>
              <span className="font-light text-stone-500 text-[10px] uppercase">
                Builders
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-700 hover:text-amber-700 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-[2px] bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-[2px] bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={() => setMenuOpen(false)}
              />
            ))}
            <div className="mt-4 pt-4 border-t border-stone-100">
              <Button href="/contact" size="sm" fullWidth onClick={() => setMenuOpen(false)}>
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
