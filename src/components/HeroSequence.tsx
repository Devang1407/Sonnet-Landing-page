"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Star, Check } from "lucide-react";

const FRAME_COUNT = 137;
const FRAME_PREFIX = "/assets/hero-sequence/ezgif-frame-";
const ANIMATION_DURATION = 5000; // 5 seconds

/* ─── Reviews for top ticker ─── */
const reviews = [
  { name: "Linda S.", text: "I wake up feeling rested and cheerful!" },
  { name: "Gabe", text: "0% groggy 100% recharged" },
  { name: "Daryl S.", text: "It helps me stay asleep longer than anything else I've tried." },
  { name: "J F.", text: "Works wonderfully. Love that there is no melatonin!" },
  { name: "Jason", text: "Now I can't wait to go to sleep!" },
  { name: "Noa R.", text: "Finally slept through the night!" },
  { name: "Lisa C.", text: "This has helped me sleep and wake up chill." },
  { name: "Elisabeth", text: "I have tried many sleep supplements and this one is the best!" },
  { name: "Mike B.", text: "A smooth transition into drowsiness. Love it." },
  { name: "DeWayne K.", text: "Works great! Very happy, thanks!" },
];
const tickerReviews = [...reviews, ...reviews];

/* ─── Press cards ─── */
const pressCards = [
  { source: "People", quote: "\"The most medically-backed method I've tried.\"", style: "font-bold tracking-tighter" },
  { source: "Yahoo! Life", quote: "\"#1 Best Supplement To Take While Traveling.\"", style: "font-bold tracking-tight" },
  { source: "Forbes", quote: "\"Unlike traditional medication but still works.\"", style: "font-serif font-bold uppercase tracking-widest text-sm" },
  { source: "Sleep Foundation", quote: "2021 Best Overall — Top Pick", style: "font-serif font-bold text-sm" },
];

export default function HeroSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const animStartRef = useRef<number | null>(null);
  const animDirectionRef = useRef<"forward" | "reverse">("forward");
  const rafRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState("sleep-calm");
  const [selectedContainer, setSelectedContainer] = useState("bottle");
  const [selectedPlan, setSelectedPlan] = useState("subscribe");
  const [tickerPaused, setTickerPaused] = useState(false);

  const getFrameSrc = (i: number) => `${FRAME_PREFIX}${(i + 1).toString().padStart(3, "0")}.jpg`;

  /* ─── Canvas drawing (cover) ─── */
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[frameIndex];
    if (!img?.complete || !img.naturalWidth) return;

    const cw = canvas.width, ch = canvas.height;
    const imgR = img.naturalWidth / img.naturalHeight;
    const canR = cw / ch;
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (imgR > canR) { sw = sh * canR; sx = (img.naturalWidth - sw) / 2; }
    else { sh = sw / canR; sy = (img.naturalHeight - sh) / 2; }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  /* ─── Time-based animation (5 seconds total) ─── */
  const tick = useCallback((timestamp: number) => {
    if (animStartRef.current === null) animStartRef.current = timestamp;
    const elapsed = timestamp - animStartRef.current;
    const progress = Math.min(1, elapsed / ANIMATION_DURATION);

    let frame: number;
    if (animDirectionRef.current === "forward") {
      frame = Math.round(progress * (FRAME_COUNT - 1));
    } else {
      const startFrame = currentFrameRef.current; // captured at start
      frame = Math.round(startFrame * (1 - progress));
    }

    if (frame !== currentFrameRef.current || progress === 0) {
      currentFrameRef.current = frame;
      drawFrame(frame);
    }

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [drawFrame]);

  const playForward = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    animStartRef.current = null;
    animDirectionRef.current = "forward";
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const playReverse = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    animStartRef.current = null;
    animDirectionRef.current = "reverse";
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  /* ─── Resize canvas ─── */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  /* ─── Preload ─── */
  useEffect(() => {
    let count = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => { count++; if (count === FRAME_COUNT) setIsLoaded(true); };
      if (i === 0) img.fetchPriority = "high";
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Auto-play via Intersection Observer for mobile (triggers once when entering view)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playForward();
            // Disconnect after first play so we don't keep triggering it while scrolling
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // Triggers when 30% of the hero is visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => { 
      window.removeEventListener("resize", resizeCanvas); 
      cancelAnimationFrame(rafRef.current); 
      observer.disconnect();
    };
  }, [isLoaded, resizeCanvas, playForward]);

  return (
    <section className="w-full bg-sonnet-navy border-b border-sonnet-navy">

      {/* ═══ SCROLLING REVIEWS TICKER ═══ */}
      <div
        className="w-full bg-sonnet-navy border-b border-white/10 overflow-hidden py-3"
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div
          className="flex gap-6 w-max"
          style={{
            animation: "marquee 50s linear infinite",
            animationPlayState: tickerPaused ? "paused" : "running",
          }}
        >
          {tickerReviews.map((r, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0 px-2">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-sm text-white/85 font-medium whitespace-nowrap">
                &ldquo;{r.text}&rdquo;
              </span>
              <span className="text-xs text-white/40 font-semibold whitespace-nowrap">— {r.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ HERO: FULL-WIDTH ANIMATION + OVERLAID PRODUCT PANEL ═══ */}
      <div
        ref={containerRef}
        className="relative w-full min-h-[85vh] overflow-hidden cursor-pointer bg-sonnet-navy"
        onMouseEnter={playForward}
        onMouseLeave={playReverse}
      >
        {/* Canvas background (covers entire hero) */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-sonnet-navy flex items-center justify-center">
            <div className="animate-pulse text-white/30 text-sm font-medium tracking-wider">Loading product...</div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Gradient scrim for text readability on right side - ends at transparent to avoid tinting the product on the left */}
        <div className="absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-2/3 bg-gradient-to-l from-sonnet-navy/95 via-sonnet-navy/70 to-transparent pointer-events-none" />

        {/* ═══ OVERLAID PRODUCT PANEL (right side) ═══ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 flex justify-end min-h-[85vh] items-center">
          <div className="w-full md:w-[420px] lg:w-[460px] flex flex-col space-y-5 pointer-events-auto">

            {/* Title + Campaign Line */}
            <div>
              <span className="text-xs font-bold text-white/90 uppercase tracking-[0.2em] mb-1.5 block">Sleep Made Simple</span>
              <h1 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider mb-1">Sleep Supplements for busy minds</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">Sleep + Calm</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm text-white font-semibold border-l border-white/30 pl-3">257 Reviews</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] font-medium text-white/95 leading-relaxed mt-2">
              Science-backed sleep support that helps you fall asleep easier, stay asleep longer, and wake up refreshed without grogginess or habit-forming ingredients.
            </p>

            {/* Formula */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider mb-2 block">Formula: Sleep + Calm</span>
              <div className="flex items-center gap-2">
                {[{ id: "core-sleep", l: "Core Sleep" }, { id: "sleep-calm", l: "Sleep + Calm" }, { id: "sleep-restore", l: "Sleep + Restore" }].map((f) => (
                  <button key={f.id} onClick={() => setSelectedFormula(f.id)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg border-2 transition-all ${selectedFormula === f.id ? "border-white bg-white text-sonnet-navy" : "border-white/40 text-white hover:border-white/60 hover:bg-white/5"}`}>
                    {f.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Container */}
            <div>
              <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider mb-2 block">Container: {selectedContainer === "bottle" ? "Bottle" : "Pouch"}</span>
              <div className="flex items-center gap-2">
                {[{ id: "bottle", l: "Bottle" }, { id: "pouch", l: "Pouch" }].map((c) => (
                  <button key={c.id} onClick={() => setSelectedContainer(c.id)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg border-2 transition-all ${selectedContainer === c.id ? "border-white bg-white text-sonnet-navy" : "border-white/40 text-white hover:border-white/60 hover:bg-white/5"}`}>
                    {c.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Options */}
            <div className="space-y-2 pt-2">
              <button onClick={() => setSelectedPlan("subscribe")}
                className={`w-full flex items-start gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${selectedPlan === "subscribe" ? "border-amber-400 bg-white/10" : "border-white/20 hover:border-white/40 hover:bg-white/5"}`}>
                <div className={`w-4 h-4 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 ${selectedPlan === "subscribe" ? "border-amber-400 bg-amber-400" : "border-white/40"}`}>
                  {selectedPlan === "subscribe" && <Check className="w-2.5 h-2.5 text-sonnet-navy" strokeWidth={3} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-extrabold text-white text-[15px]">Subscribe & Save 10%</span>
                    <div><span className="text-xs text-white/60 line-through mr-1.5 font-medium">$39.99</span><span className="font-extrabold text-[#FFC83D] text-[15px]">$35.99</span></div>
                  </div>
                  <ul className="text-xs font-medium text-white/80 space-y-1">
                    <li>• Free shipping</li>
                    <li>• Risk-free first 30 days</li>
                    <li>• Cancel anytime</li>
                  </ul>
                </div>
              </button>

              <button onClick={() => setSelectedPlan("onetime")}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${selectedPlan === "onetime" ? "border-amber-400 bg-white/10" : "border-white/20 hover:border-white/40 hover:bg-white/5"}`}>
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${selectedPlan === "onetime" ? "border-amber-400 bg-amber-400" : "border-white/40"}`}>
                  {selectedPlan === "onetime" && <Check className="w-2.5 h-2.5 text-sonnet-navy" strokeWidth={3} />}
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <span className="font-extrabold text-white text-[15px]">One Time Purchase</span>
                  <span className="font-extrabold text-white text-[15px]">$39.99</span>
                </div>
              </button>
            </div>

            {/* Primary CTA */}
            <div className="pt-2 pb-1">
              <Link href="#purchase" className="block w-full text-center py-4 bg-amber-400 text-sonnet-navy rounded-xl text-[17px] font-extrabold tracking-wide hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20">
                Start Sleeping Better
              </Link>
              <div className="flex justify-center mt-3 text-xs font-bold text-white/80 tracking-wide uppercase text-center">
                Non habit-forming • Drug-free • Expert-designed
              </div>
            </div>

            {/* Bottom Trust */}
            <div className="flex items-center gap-4 text-xs text-white/80 font-semibold mt-2">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" strokeWidth={3} /><span className="text-amber-400 font-extrabold whitespace-nowrap">Free Shipping</span> on orders $30+</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" strokeWidth={3} /><span className="text-amber-400 font-extrabold whitespace-nowrap">Money back Guarantee</span></span>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}
