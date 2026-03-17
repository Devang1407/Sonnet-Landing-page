import { Brain, HeartPulse } from "lucide-react";

export default function StressSection() {
  return (
    <section className="w-full bg-white py-24 lg:py-32 px-6 border-t border-sonnet-navy/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-sonnet-navy tracking-tight leading-tight">
            A Sleep Supplement Designed for Everyday Stress
          </h2>
          <p className="text-lg md:text-xl text-sonnet-navy/70 leading-relaxed font-medium">
            84% of Sonnet users report noticeably better sleep within the first week. This isn&apos;t a sedative — it&apos;s a precision sleep supplement that works with your body&apos;s natural rhythms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 — H3 */}
          <div className="group bg-sonnet-cream rounded-3xl p-10 border border-sonnet-navy/5 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-sonnet-navy/5 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-sonnet-navy transition-colors duration-300">
              <Brain className="w-7 h-7 text-sonnet-navy group-hover:text-sonnet-cream transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-sonnet-navy mb-4">Made for Busy Minds</h3>
            <p className="text-sonnet-navy/70 text-base leading-relaxed font-medium">
              Endless thoughts that keep you awake, the compounding toll of high-stakes work, the constant need to be &ldquo;on&rdquo; — this sleep supplement is specifically formulated for the racing minds of busy professionals who can&apos;t afford to sacrifice tomorrow&apos;s performance.
            </p>
            <div className="mt-8 pt-8 border-t border-sonnet-navy/5">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-sonnet-navy">59%</span>
                <span className="text-sm text-sonnet-navy/60 font-medium">average improvement in overall sleep scores after just 5 nights</span>
              </div>
            </div>
          </div>

          {/* Card 2 — H3 */}
          <div className="group bg-sonnet-cream rounded-3xl p-10 border border-sonnet-navy/5 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-sonnet-navy/5 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-sonnet-navy transition-colors duration-300">
              <HeartPulse className="w-7 h-7 text-sonnet-navy group-hover:text-sonnet-cream transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-sonnet-navy mb-4">Supplements to Help Sleep and Reduce Stress</h3>
            <p className="text-sonnet-navy/70 text-base leading-relaxed font-medium">
              Clinically-studied Sensoril® Ashwagandha lowers cortisol levels, while L-Theanine promotes alpha brain waves for relaxation. Together they create a calming pre-sleep ritual that fits seamlessly into demanding schedules and travel.
            </p>
            <div className="mt-8 pt-8 border-t border-sonnet-navy/5">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-sonnet-navy">79%</span>
                <span className="text-sm text-sonnet-navy/60 font-medium">of customers had less frequent issues staying asleep</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
