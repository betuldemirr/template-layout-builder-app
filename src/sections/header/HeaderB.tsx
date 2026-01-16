type HeaderProps = {
  brand?: string;
  note?: string;
};

export default function HeaderB({ brand = "Promake" }: HeaderProps) {
  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5">
        <div className="text-lg font-extrabold text-text">{brand}</div>

        <div className="flex items-center gap-3">
          <button className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-text hover:bg-surface/80 transition">
            Sign in
          </button>

          <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-onPrimary hover:opacity-90 transition">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
