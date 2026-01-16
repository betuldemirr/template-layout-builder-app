type FeatureBItem = {
  title: string;
  description: string;
};

type FeaturesBProps = {
  heading?: string;
  subtitle?: string;
  items?: FeatureBItem[];
};

const defaultItems: FeatureBItem[] = [
  {
    title: "Clean structure",
    description: "Organized sections help you maintain a readable layout.",
  },
  {
    title: "Adaptable design",
    description: "Each part can be rearranged to fit different page types.",
  },
  {
    title: "Fast editing",
    description: "Make quick adjustments without affecting the whole layout.",
  },
];

export default function FeaturesB({
  heading = "Built for everyday use",
  subtitle = "Designed with scalability and AI-driven UX in mind",
  items = defaultItems,
}: FeaturesBProps) {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl font-bold text-text">{heading}</h2>
          <p className="mt-4 text-muted text-lg">{subtitle}</p>
        </div>

        <div className="space-y-8">
          {items.map((feat, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-primary"></div>

              <div>
                <h3 className="text-lg font-semibold text-text">{feat.title}</h3>
                <p className="text-sm text-muted mt-1">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
