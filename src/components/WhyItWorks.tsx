import { Moon, Brain, Briefcase, Sun } from "lucide-react";

export default function WhyItWorks() {
  const benefits = [
    {
      title: "Helps calm the mind",
      description: "Carefully selected ingredients work specifically to quiet nervous energy and halt racing thoughts before bed.",
      icon: <Brain className="w-8 h-8 flex-shrink-0" />,
    },
    {
      title: "Supports better sleep",
      description: "Restores your natural sleep architecture. Fall asleep faster, stay asleep longer, and optimize REM cycles.",
      icon: <Moon className="w-8 h-8 flex-shrink-0" />,
    },
    {
      title: "Built for busy professionals",
      description: "Designed into a simple, single-dose regimen that fits easily into demanding schedules and late-night travel.",
      icon: <Briefcase className="w-8 h-8 flex-shrink-0" />,
    },
    {
      title: "Wake refreshed",
      description: "Zero melatonin means zero morning grogginess. You wake up clear-headed, energized, and ready to perform.",
      icon: <Sun className="w-8 h-8 flex-shrink-0" />,
    },
  ];

  return (
    <section className="w-full bg-sonnet-cream py-24 lg:py-32 px-6 border-t border-sonnet-navy/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-sonnet-navy tracking-tight">
            Why Sonnet Sleep + Calm Stands Out Among Sleep Supplements
          </h2>
          <p className="text-lg text-sonnet-navy/70">
            A precise formulation built on modern neuroscience and clinical research — not another generic supplement for sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-sonnet-navy transition-colors duration-300 group-hover:bg-sonnet-navy group-hover:text-sonnet-beige shadow-sm">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-sonnet-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-sonnet-navy/80 leading-relaxed max-w-xs mx-auto">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
