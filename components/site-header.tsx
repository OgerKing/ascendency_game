import Link from "next/link";

const navItems = [
  { href: "/", label: "Start Here" },
  { href: "/browse", label: "Browse Lore" },
  { href: "/paths", label: "Path Comparison" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="content-shell">
        <div className="site-header-row">
          <Link href="/" className="brand">
            Ascendency Wars
          </Link>
          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
