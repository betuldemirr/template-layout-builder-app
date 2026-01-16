type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryAction?: string;
};

export default function HeroA({
  title = "AI website builder",
  subtitle = "Compose pages using modular sections and design tokens",
  primaryAction = "Get Started",
}: HeroProps) {
  return (
    <section className="bg-bg">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-text md:text-4xl">{title}</h1>
          <p className="mt-4 text-base text-muted">{subtitle}</p>

          <button className="mt-6 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-onPrimary hover:opacity-90 transition">
            {primaryAction}
          </button>
        </div>
      </div>
    </section>
  );
}
