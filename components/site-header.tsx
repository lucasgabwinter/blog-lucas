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
      <Link href="/" className="brand">
        <span className="brand-mark">LW</span>
        <span>
          <strong>Lucas Winter</strong>
          <small>Ciência de Dados</small>
        </span>
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
