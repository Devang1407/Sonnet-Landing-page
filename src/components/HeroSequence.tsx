"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Star, Check, Minus, Plus } from "lucide-react";

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
  const [quantity, setQuantity] = useState(1);
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
    return () => { window.removeEventListener("resize", resizeCanvas); cancelAnimationFrame(rafRef.current); };
  }, [isLoaded, resizeCanvas]);

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

            {/* Title + Stars */}
            <div>
              <h1 className="text-xs font-bold text-amber-400/80 uppercase tracking-[0.2em] mb-2">Sleep Supplements for Busy Minds</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Sleep + Calm</h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm text-white/70 font-medium">257 Reviews</span>
              </div>
            </div>

            {/* Highly Rated */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-white/50 font-medium">✨ Highly rated for:</span>
              {["Calmness", "Sleep & Calm", "Dream Quality"].map((t) => (
                <span key={t} className="text-xs font-semibold text-white bg-white/10 px-2.5 py-1 rounded-full border border-white/15">{t}</span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed">
              Sleep + Calm takes our core formulation and adds L-Theanine to reduce everyday stress and promote a more relaxed state.
            </p>

            {/* Trust Checks */}
            <div className="flex items-center gap-5 text-sm font-semibold text-white">
              {["Safe", "Effective", "Tailored"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" strokeWidth={3} />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* Formula */}
            <div>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5 block">Formula: Sleep + Calm</span>
              <div className="flex items-center gap-2">
                {[{ id: "core-sleep", l: "Core Sleep" }, { id: "sleep-calm", l: "Sleep + Calm" }, { id: "sleep-restore", l: "Sleep + Restore" }].map((f) => (
                  <button key={f.id} onClick={() => setSelectedFormula(f.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border-2 transition-all ${selectedFormula === f.id ? "border-white bg-white text-sonnet-navy" : "border-white/20 text-white hover:border-white/40"}`}>
                    {f.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Container */}
            <div>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5 block">Container: {selectedContainer === "bottle" ? "Bottle" : "Pouch"}</span>
              <div className="flex items-center gap-2">
                {[{ id: "bottle", l: "Bottle" }, { id: "pouch", l: "Pouch" }].map((c) => (
                  <button key={c.id} onClick={() => setSelectedContainer(c.id)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-lg border-2 transition-all ${selectedContainer === c.id ? "border-white bg-white text-sonnet-navy" : "border-white/20 text-white hover:border-white/40"}`}>
                    {c.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <button onClick={() => setSelectedPlan("subscribe")}
                className={`w-full flex items-start gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${selectedPlan === "subscribe" ? "border-amber-400 bg-white/10" : "border-white/15 hover:border-white/25"}`}>
                <div className={`w-4 h-4 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 ${selectedPlan === "subscribe" ? "border-amber-400 bg-amber-400" : "border-white/30"}`}>
                  {selectedPlan === "subscribe" && <Check className="w-2.5 h-2.5 text-sonnet-navy" strokeWidth={3} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-white text-sm">Subscribe &amp; Save 10%</span>
                    <div><span className="text-xs text-white/40 line-through mr-1.5">$39.99</span><span className="font-bold text-amber-400">$35.99</span></div>
                  </div>
                  <ul className="text-[11px] text-white/50 mt-1 space-y-0">
                    <li>• Free shipping · Risk-free first 30 days · Cancel anytime</li>
                  </ul>
                </div>
              </button>

              <button onClick={() => setSelectedPlan("onetime")}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${selectedPlan === "onetime" ? "border-amber-400 bg-white/10" : "border-white/15 hover:border-white/25"}`}>
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${selectedPlan === "onetime" ? "border-amber-400 bg-amber-400" : "border-white/30"}`}>
                  {selectedPlan === "onetime" && <Check className="w-2.5 h-2.5 text-sonnet-navy" strokeWidth={3} />}
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <span className="font-bold text-white text-sm">One Time Purchase</span>
                  <span className="font-bold text-white">$39.99</span>
                </div>
              </button>
            </div>

            {/* Quantity + Add to Bag */}
            <div className="flex items-center gap-3">
              <div className="flex items-center border-2 border-white/20 rounded-xl overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2.5 py-2.5 hover:bg-white/10 transition-colors"><Minus className="w-3.5 h-3.5 text-white" /></button>
                <span className="px-3 py-2.5 text-sm font-bold text-white min-w-[36px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-2.5 py-2.5 hover:bg-white/10 transition-colors"><Plus className="w-3.5 h-3.5 text-white" /></button>
              </div>
              <button className="flex-1 py-3 bg-amber-400 text-sonnet-navy rounded-xl text-sm font-bold tracking-wide hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20">
                Add to Bag
              </button>
            </div>

            {/* Bottom Trust */}
            <div className="flex items-center gap-3 text-[11px] text-white/50 font-medium">
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-amber-400" strokeWidth={2.5} /><span className="text-amber-400 font-bold whitespace-nowrap">Free Shipping</span> on orders $30+</span>
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-amber-400" strokeWidth={2.5} /><span className="text-amber-400 font-bold whitespace-nowrap">Money back Guarantee</span></span>
            </div>

            {/* ═══ PRESS CARDS (below pricing) ═══ */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {pressCards.map((p, i) => (
                <div key={i} className="bg-white/5 rounded-xl px-3 py-3 border border-white/10 text-center">
                  <span className={`block text-white text-sm ${p.style}`}>{p.source}</span>
                  <p className="text-[10px] text-white/40 mt-1 leading-snug font-medium">{p.quote}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
