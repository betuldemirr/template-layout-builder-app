import React from "react";

type PreviewFrameProps = {
  children: React.ReactNode;
};

export default function PreviewFrame({
  children,
}: PreviewFrameProps) {
  return (
    <section className="bg-bg h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
      {children}
    </section>
  );
}
