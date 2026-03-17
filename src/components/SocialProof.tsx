import { Star, Quote } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="w-full bg-sonnet-cream py-24 border-t border-sonnet-navy/5">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* Stats + Stars */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-1 text-sonnet-accent mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-sonnet-navy">257 five-star reviews and counting.</h2>
          <p className="text-sonnet-navy/70 text-lg max-w-2xl">84% of Sonnet users report noticeably better sleep within the first week. Trusted by busy professionals nationwide.</p>
        </div>

        {/* Press Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-sonnet-navy/5 shadow-sm">
            <Quote className="w-8 h-8 text-sonnet-accent/50 mb-4" />
            <p className="text-sonnet-navy/80 text-base leading-relaxed font-medium italic mb-6">
              &ldquo;The most medically-backed method I&apos;ve tried.&rdquo;
            </p>
            <span className="text-2xl font-bold tracking-tighter text-sonnet-navy">People</span>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-sonnet-navy/5 shadow-sm">
            <Quote className="w-8 h-8 text-sonnet-accent/50 mb-4" />
            <p className="text-sonnet-navy/80 text-base leading-relaxed font-medium italic mb-6">
              &ldquo;The #1 Best Supplement To Take While Traveling.&rdquo;
            </p>
            <span className="text-2xl font-bold text-purple-800 tracking-tight">Yahoo! <span className="text-sm">Life</span></span>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-sonnet-navy/5 shadow-sm">
            <Quote className="w-8 h-8 text-sonnet-accent/50 mb-4" />
            <p className="text-sonnet-navy/80 text-base leading-relaxed font-medium italic mb-6">
              &ldquo;The sleep vitamin is unlike traditional medication but still works to improve overall sleep and health.&rdquo;
            </p>
            <span className="text-2xl font-serif font-bold uppercase tracking-widest text-sonnet-navy">Forbes</span>
          </div>
        </div>

        {/* Awards + Press Logos */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center pt-8 border-t border-sonnet-navy/5">
          <div className="flex flex-col items-center justify-center h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-sm font-serif font-bold text-sonnet-navy leading-tight text-center">SleepFoundation.org</span>
            <span className="text-[10px] font-bold uppercase text-sonnet-accent tracking-widest">Top Pick 2021</span>
          </div>
          <div className="flex flex-col items-center justify-center h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-lg font-bold tracking-tighter text-sonnet-navy">People</span>
          </div>
          <div className="flex flex-col items-center justify-center h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-lg font-serif font-bold uppercase tracking-widest text-sonnet-navy">Forbes</span>
          </div>
          <div className="flex flex-col items-center justify-center h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-lg font-bold text-purple-800 tracking-tight">Yahoo!</span>
          </div>
          <div className="flex flex-col items-center justify-center h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-sm font-bold text-sonnet-navy">TechCrunch</span>
          </div>
          <div className="flex flex-col items-center justify-center h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-sm font-bold text-sonnet-navy">Brides</span>
            <span className="text-[10px] font-bold uppercase text-sonnet-accent tracking-widest">Beauty Awards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
