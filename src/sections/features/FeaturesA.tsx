type FeatureItem = {
  title: string;
  description: string;
};

type FeaturesProps = {
  heading?: string;
  subtitle?: string;
  items?: FeatureItem[];
};

const defaultFeatures: FeatureItem[] = [
  {
    title: "Easy to customize",
    description: "Adjust sections quickly without changing the overall structure.",
  },
  {
    title: "Reusable layouts",
    description: "Combine different sections to create new page structures easily.",
  },
  {
    title: "Consistent styling",
    description: "Shared tokens ensure a unified look across all components.",
  },
];

export default function FeaturesA({
  heading = "Simple and flexible features",
  subtitle = "A clean set of features designed to work with any layout style.",
  items = defaultFeatures,
}: FeaturesProps) {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold text-text">{heading}</h2>
        <p className="mt-3 text-muted max-w-xl mx-auto">{subtitle}</p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-border p-6 bg-surface text-left"
            >
              <div className="absolute left-0 top-8 h-1/2 w-1 bg-primary rounded-r-md"></div>

              <h3 className="mt-1 font-semibold text-text">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}