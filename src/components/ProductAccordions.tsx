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

export default function ProductAccordions() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Horizontal tab bar on desktop, accordion on mobile */}

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
          <div className="py-6">
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
    </section>
  );
}
