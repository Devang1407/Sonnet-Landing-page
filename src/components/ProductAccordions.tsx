"use client";

import { useState } from "react";
import { ChevronDown, FileText, Leaf, Truck } from "lucide-react";

const sections = [
  {
    title: "Description",
    icon: <FileText className="w-4 h-4" />,
    content:
      "A blend of Core Sleep with clinically-proven L-theanine which helps to promote relaxation, cope with everyday stress and support a restful, relaxed state. For individuals seeking better sleep with extra support to relieve everyday stress. Sleep + Calm is a science-backed sleep supplement designed for busy professionals who need to unwind without grogginess or habit-forming ingredients.",
  },
  {
    title: "Key Ingredients",
    icon: <Leaf className="w-4 h-4" />,
    content:
      "• Sensoril® Ashwagandha — 125mg\n• Valerian Root — 300mg\n• GABA (Gamma-Aminobutyric acid) — 100mg\n• Venetron® (Rafuma Leaf Extract) — 50mg\n• L-Theanine — 200mg\n\nAll ingredients are clinically studied at effective dosages. No artificial colors or binders. Vegan, gluten-free, non-GMO.",
  },
  {
    title: "Shipping & Returns",
    icon: <Truck className="w-4 h-4" />,
    content:
      "Free Shipping over $30. 30 Day Free Returns. Money back guarantee — if you're not satisfied, we'll refund your purchase, no questions asked.",
  },
];

/* ─── Press cards ─── */
const pressCards = [
  { source: "People", quote: "\"The most medically-backed method I've tried.\"", style: "font-bold tracking-tighter" },
  { source: "Yahoo! Life", quote: "\"#1 Best Supplement To Take While Traveling.\"", style: "font-bold tracking-tight" },
  { source: "Forbes", quote: "\"Unlike traditional medication but still works.\"", style: "font-serif font-bold uppercase tracking-widest text-sm" },
  { source: "Sleep Foundation", quote: "2021 Best Overall — Top Pick", style: "font-serif font-bold text-sm" },
];

export default function ProductAccordions() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Press Cards */}
          <div className="md:col-span-5 order-2 md:order-1 pt-6 md:pt-0">
            <h3 className="text-sm font-bold text-sonnet-navy/40 uppercase tracking-widest mb-6">Expert Recommended</h3>
            <div className="grid grid-cols-2 gap-3">
              {pressCards.map((p, i) => (
                <div key={i} className="bg-sonnet-navy/5 rounded-2xl p-4 md:p-5 border border-sonnet-navy/5 text-center flex flex-col justify-center min-h-[100px] hover:bg-sonnet-navy/10 transition-colors">
                  <span className={`block text-sonnet-navy text-sm md:text-base ${p.style}`}>{p.source}</span>
                  <p className="text-[11px] md:text-xs text-sonnet-navy/60 mt-2 leading-relaxed font-medium">{p.quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Tabs / Accordion */}
          <div className="md:col-span-7 order-1 md:order-2">
            {/* Desktop: Horizontal tabs */}
            <div className="hidden md:block">
              {/* Tab headers */}
              <div className="flex border-b border-gray-200">
                {sections.map((section, idx) => {
                  const isActive = openIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setOpenIndex(idx)}
                      className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all border-b-2 -mb-px ${
                        isActive
                          ? "text-sonnet-navy border-sonnet-navy"
                          : "text-sonnet-navy/40 border-transparent hover:text-sonnet-navy/70 hover:border-sonnet-navy/20"
                      }`}
                    >
                      {section.icon}
                      {section.title}
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              <div className="py-6 min-h-[160px]">
                <p className="text-base text-sonnet-navy/75 leading-relaxed max-w-2xl whitespace-pre-line">
                  {sections[openIndex].content}
                </p>
              </div>
            </div>

            {/* Mobile: Accordion */}
            <div className="md:hidden">
              {sections.map((section, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border-b border-gray-100">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full py-5 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sonnet-navy/50">{section.icon}</span>
                        <h3 className="text-base font-bold text-sonnet-navy group-hover:text-sonnet-navy/80 transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-sonnet-navy/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-sonnet-navy/70 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
