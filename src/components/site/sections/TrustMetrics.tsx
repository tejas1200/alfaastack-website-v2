const stats = [
  { value: "7+", label: "Projects delivered" },
  { value: "5+", label: "Happy clients" },
  { value: "2+", label: "Countries served" },
  { value: "4.9/5", label: "Avg. client rating" },
];

export function TrustMetrics() {
  return (
    <section aria-label="Trust metrics" className="border-y border-border/60 bg-surface">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold gradient-text">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
