export default function ProblemSection() {
  return (
    <section className="w-full bg-sonnet-cream py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sonnet-beige/20 -skew-x-12 translate-x-32 -z-10" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-sonnet-navy tracking-tight leading-tight">
            Supplements for Sleep Without Grogginess
          </h2>
          <p className="text-lg md:text-xl text-sonnet-navy/70 leading-relaxed font-medium">
            Everyday stress builds up. When it's finally time to rest, winding down feels impossible. You need sleep supplements that deliver deep, restorative sleep — without the heavy morning fog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 — H3 */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-sonnet-navy/5 shadow-xl shadow-sonnet-navy/5 transform transition-transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-sonnet-beige rounded-2xl mb-6 flex items-center justify-center text-sonnet-navy font-bold text-xl">01</div>
            <h3 className="text-2xl font-semibold text-sonnet-navy mb-4">Non Habit-Forming Sleep Support</h3>
            <p className="text-sonnet-navy/70 text-base leading-relaxed">
              Unlike prescription sleep aids or over-the-counter antihistamines, this sleep supplement contains 100% drug-free, non-habit-forming botanical ingredients. You can safely stop taking it at any time without withdrawal.
            </p>
          </div>

          {/* Card 2 — H3 */}
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-sonnet-navy/5 shadow-xl shadow-sonnet-navy/5 transform transition-transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-sonnet-beige rounded-2xl mb-6 flex items-center justify-center text-sonnet-navy font-bold text-xl">02</div>
            <h3 className="text-2xl font-semibold text-sonnet-navy mb-4">Wake Refreshed, Not Groggy</h3>
            <p className="text-sonnet-navy/70 text-base leading-relaxed">
              Because we explicitly avoid heavy sedatives and melatonin, you wake up clear-headed and energized. Our formula supports your natural sleep architecture instead of forcing unnatural sedation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
