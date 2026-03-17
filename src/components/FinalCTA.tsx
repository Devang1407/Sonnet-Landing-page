export default function FinalCTA() {
  return (
    <section className="w-full bg-sonnet-navy py-32 px-6 relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sonnet-navy-light rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-semibold text-sonnet-cream tracking-tight leading-tight">
            Start Sleeping Better
          </h2>
          <p className="text-xl text-sonnet-cream/80 max-w-2xl mx-auto font-medium">
            Find a simpler, science-backed way to unwind and sleep well. 
            No grogginess. No hassle. Just rest.
          </p>
        </div>

        <button className="px-12 py-5 bg-sonnet-cream text-sonnet-navy rounded-full text-lg font-bold tracking-wide hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
          Start Sleeping Better
        </button>

        <p className="text-sm font-medium text-sonnet-cream/50 uppercase tracking-widest pt-8">
          Free shipping on orders over $30
        </p>
      </div>
    </section>
  );
}
