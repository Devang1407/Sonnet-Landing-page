import { Leaf, Award } from "lucide-react";

export default function IngredientsSection() {
  const ingredients = [
    {
      name: "L-Theanine for Calm",
      dose: "200mg",
      benefit: "Promotes relaxation and alpha brain wave activity, helping to reduce stress and quiet a restless mind without drowsiness.",
    },
    {
      name: "Valerian Root for Sleep Support",
      dose: "300mg",
      benefit: "A time-tested botanical extract used for centuries to support faster sleep onset and deeper, more restful sleep cycles.",
    },
    {
      name: "GABA and Ashwagandha for Stress Support",
      dose: "100mg GABA · 125mg Sensoril®",
      benefit: "GABA blocks stress signals to the brain, while clinically-studied Sensoril® Ashwagandha lowers cortisol — together they relieve occasional sleeplessness and stress.",
    },
    {
      name: "Venetron® Rafuma Leaf",
      dose: "50mg",
      benefit: "A patented botanical that supports serotonin production, encouraging a calm mood and helping you fall asleep faster and stay asleep longer.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32 px-6 border-t border-sonnet-navy/5">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start md:items-end">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-sonnet-navy tracking-tight leading-tight">
              Science-Backed Ingredients in Our Sleep Supplement
            </h2>
            <p className="text-lg md:text-xl text-sonnet-navy/70 leading-relaxed max-w-lg font-medium">
              We sourced the highest-quality bioavailable compounds to work synergistically. No fillers, no melatonin — just exactly what your body needs to wind down.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-sonnet-cream/80 backdrop-blur p-5 rounded-2xl shadow-sm border border-sonnet-navy/5">
            <Award className="w-10 h-10 text-sonnet-accent flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-bold text-sonnet-navy text-sm uppercase tracking-wider">Clinically Studied</span>
              <span className="text-sm text-sonnet-navy/60 font-medium">Vegan · Gluten-free · Non-GMO</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ingredients.map((item, idx) => (
            <div key={idx} className="bg-sonnet-cream rounded-3xl p-8 border border-sonnet-navy/5 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-sonnet-navy/5 rounded-2xl flex items-center justify-center group-hover:bg-sonnet-navy group-hover:text-sonnet-cream transition-colors duration-300">
                  <Leaf className="w-6 h-6 text-sonnet-navy group-hover:text-sonnet-cream transition-colors" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-sonnet-accent bg-sonnet-accent/10 px-3 py-1 rounded-full">{item.dose}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-sonnet-navy mb-3">{item.name}</h3>
              <p className="text-base text-sonnet-navy/70 leading-relaxed font-medium">{item.benefit}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
