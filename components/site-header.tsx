import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/#artigos", label: "Artigos" },
  { href: "/#temas", label: "Temas" },
  { href: "/#newsletter", label: "Newsletter" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Voltar para a home">
        <span className="brand-wordmark">Read</span>
        <span className="brand-tagline">um blog minimalista sobre ciencia de dados e legibilidade</span>
      </Link>

      <nav className="site-nav" aria-label="Principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
