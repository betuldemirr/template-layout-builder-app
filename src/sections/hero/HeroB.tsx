type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryAction?: string;
  imgUrl?: string;
};

export default function HeroB({
  title = "Design better websites with AI",
  subtitle = "Let AI assemble your layout from sections",
  primaryAction = "Get Started",
  imgUrl = "https://picsum.photos/seed/picsum/1600/900",
}: HeroProps) {
  return (
    <section className="relative h-screen max-h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-extrabold text-text md:text-5xl">
          {title}
        </h1>

        <p className="mt-5 text-lg text-text">{subtitle}</p>

        <div className="mt-8">
          <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-onPrimary hover:opacity-90 transition">
            {primaryAction}
          </button>
        </div>
      </div>
    </section>
  );
}
