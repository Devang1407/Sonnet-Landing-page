import { ShieldCheck, Sparkles, Leaf, MapPin } from "lucide-react";

export default function TrustStrip() {
  const trustItems = [
    { icon: <ShieldCheck className="w-5 h-5 flex-shrink-0" />, label: "CGMP Certified" },
    { icon: <Sparkles className="w-5 h-5 flex-shrink-0" />, label: "Melatonin-Free" },
    { icon: <Leaf className="w-5 h-5 flex-shrink-0" />, label: "Vegan & Non-GMO" },
    { icon: <MapPin className="w-5 h-5 flex-shrink-0" />, label: "USA Manufactured" },
  ];

  return (
    <div className="w-full bg-sonnet-navy-light text-sonnet-cream py-10 border-t border-b border-sonnet-navy">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="p-3 bg-sonnet-navy rounded-full text-sonnet-accent shadow-inner">
              {item.icon}
            </div>
            <span className="text-sm md:text-base font-bold tracking-widest uppercase opacity-90">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
