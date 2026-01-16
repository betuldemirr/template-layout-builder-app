export type SelectOption<T extends string = string> = {
  value: T;
  label: string;
};

type VariantSelectProps<T extends string = string> = {
  label: string;
  value: T;
  options: readonly SelectOption<T>[];
  onChange: (nextValue: T) => void;
};

export default function VariantSelect<T extends string = string>({
  label,
  value,
  options,
  onChange,
}: VariantSelectProps<T>) {
  return (
    <div className="mt-4">
      <label className="block text-sm mb-2 text-slate-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-primary/40"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-slate-900">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}