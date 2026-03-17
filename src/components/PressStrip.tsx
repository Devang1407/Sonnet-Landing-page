export default function PressStrip() {
  const pressItems = [
    {
      source: "People",
      quote: "\"The most medically-backed method I've tried.\"",
      className: "font-bold tracking-tighter text-sonnet-navy text-xl",
    },
    {
      source: "Yahoo! Life",
      quote: "\"The #1 Best Supplement To Take While Traveling.\"",
      className: "font-bold tracking-tight text-purple-700 text-xl",
    },
    {
      source: "Forbes",
      quote: "\"The sleep vitamin is unlike traditional medication but still works to improve overall sleep and health.\"",
      className: "font-serif font-bold uppercase tracking-widest text-sonnet-navy text-lg",
    },
    {
      source: "Sleep Foundation",
      quote: "Sleep Foundation 2021 Best Overall Melatonin Supplement",
      className: "font-serif font-bold text-sonnet-navy text-base",
      badge: "TOP PICK",
    },
  ];

  return (
    <section className="w-full bg-sonnet-cream/30 border-y border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white/80 rounded-2xl px-6 py-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={item.className}>{item.source}</span>
                {item.badge && (
                  <span className="text-[10px] font-bold uppercase bg-sonnet-navy text-white px-2 py-0.5 rounded">{item.badge}</span>
                )}
              </div>
              <p className="text-sm text-sonnet-navy/70 leading-relaxed font-medium italic">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
