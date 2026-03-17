"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What supplements help with sleep?",
    answer: "The most effective sleep supplements combine calming botanicals with amino acids that support your body\u0027s natural sleep processes. Key ingredients to look for include L-Theanine (which promotes relaxation through alpha brain waves), Valerian Root (which supports faster sleep onset), GABA (which blocks stress signals), and Ashwagandha (which lowers cortisol). Sonnet Sleep + Calm combines all of these in clinically-studied dosages."
  },
  {
    question: "When should I take Sleep + Calm?",
    answer: "Take 2 capsules with water 30\u201345 minutes before your intended sleep time. This aligns with the natural absorption curve of the ingredients, ensuring you feel relaxed right as your head hits the pillow."
  },
  {
    question: "How long does it take to begin working?",
    answer: "Most users begin to feel a gentle calming effect within 30 minutes as L-Theanine and Venetron\u00AE enter the bloodstream. Full sleep support effects from Valerian Root and Ashwagandha typically manifest within 45 minutes. 84% of Sonnet users report noticeably better sleep within the first week."
  },
  {
    question: "Are Sonnet supplements habit-forming?",
    answer: "No. Unlike prescription sleep aids or over-the-counter antihistamines, Sleep + Calm contains 100% drug-free, non-habit-forming botanical ingredients and amino acids. You can safely stop taking it at any time without withdrawal. It is safe for both short-term and long-term use."
  },
  {
    question: "How will I feel when I wake up?",
    answer: "You should not expect to feel \u0022knocked out\u0022 or groggy. Because we explicitly avoid heavy sedatives and melatonin, you will wake up feeling clear-headed and refreshed. Our formula supports your natural sleep architecture rather than forcing unnatural sedation. It feels like natural sleep where you can still awaken to normal noises."
  },
  {
    question: "What supplement helps you sleep without grogginess?",
    answer: "Sonnet Sleep + Calm is specifically designed to support better sleep without next-morning grogginess. The formula is melatonin-free — instead relying on L-Theanine, GABA, Valerian Root, Sensoril\u00AE Ashwagandha, and Venetron\u00AE to calm the mind and body naturally. 78% of Sonnet users reported being more satisfied with waking up refreshed."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 border-t border-sonnet-navy/5" id="faqs">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-semibold text-sonnet-navy tracking-tight sticky top-24 leading-tight">
            FAQ About Sleep Supplements
          </h2>
        </div>

        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border border-sonnet-navy/5 rounded-2xl bg-sonnet-cream overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md border-sonnet-navy/10' : 'hover:border-sonnet-navy/10 hover:shadow-sm'}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-sonnet-navy pr-4">{faq.question}</h3>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-white text-sonnet-navy transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-sonnet-navy text-sonnet-cream' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-sonnet-navy/80 leading-relaxed font-medium">
                    {faq.answer}
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
