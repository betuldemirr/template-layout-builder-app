type NavLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  brand?: string;
  buttonText?: string;
  navLinks?: NavLink[];
};

const defaultNavLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function HeaderA({
  brand = "Promake",
  buttonText = "Get Started",
  navLinks = defaultNavLinks,
}: HeaderProps) {
  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-base font-semibold text-text">{brand}</div>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="hover:text-text transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-onPrimary hover:opacity-90 transition">
          {buttonText}
        </button>
      </div>
    </header>
  );
}
