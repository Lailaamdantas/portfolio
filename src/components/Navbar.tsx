"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/about-me", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="app-header">
      <div className="app-logo-group">
        <Link href="/" className="app-logo">
          LAÍLA ALVES
        </Link>
        <span className="app-logo-subtitle">Product Designer</span>
      </div>
      <nav className="app-nav">
        {links.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`app-nav-link${isActive ? " app-nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
