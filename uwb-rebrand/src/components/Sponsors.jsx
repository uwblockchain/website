export default function Sponsors() {
  const placeholders = new Array(8).fill(0);

  return (
    <section id="sponsors" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-heading text-3xl text-white">Sponsors</h2>
          <a href="mailto:blockchn@uw.edu" className="text-sm text-electric hover:text-electricAlt">Become a sponsor →</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-black/60 h-24"
            >
              <span className="text-muted text-xs">Logo {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}