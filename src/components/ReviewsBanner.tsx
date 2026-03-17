"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Linda S.",
    rating: 5,
    text: "I am surprised at how well this combination of supplements work for me. I used to wake up 3 or 4 times per night tossing and turning. Now, maybe once. I wake up feeling rested and cheerful!",
    tag: "Verified Buyer",
  },
  {
    name: "Gabe",
    rating: 5,
    text: "0% groggy 100% recharged",
    tag: "Can't-fall-asleep sleeper",
  },
  {
    name: "Daryl S.",
    rating: 5,
    text: "I take it about a half hour before bedtime and can feel the drowsiness setting in pretty quickly. It helps me stay asleep longer than anything else I've tried.",
    tag: "Verified Buyer",
  },
  {
    name: "J F.",
    rating: 5,
    text: "Love love love. Works wonderfully. Wish it would be more affordable. Love that there is no melatonin!",
    tag: "Verified Buyer",
  },
  {
    name: "Jason",
    rating: 5,
    text: "I've suffered from tossing and turning for years now. Now I can't wait to go to sleep!",
    tag: "Restless sleeper",
  },
  {
    name: "Lisa C.",
    rating: 5,
    text: "This has helped me sleep and wake up \"chill\"... Recommend giving it a try if you have seasonal affect or just generally have a lot of anxiety.",
    tag: "Verified Buyer",
  },
  {
    name: "Noa R.",
    rating: 5,
    text: "Finally slept through the night!",
    tag: "Verified Buyer",
  },
  {
    name: "Mike B.",
    rating: 4,
    text: "I have noticed an improvement in my sleep patterns and stress levels. I like that this product has a smooth transition into drowsiness and helps me to fall asleep.",
    tag: "Verified Buyer",
  },
  {
    name: "Elisabeth",
    rating: 5,
    text: "I have tried many sleep supplements and this one is the best!",
    tag: "Verified Buyer",
  },
  {
    name: "DeWayne K.",
    rating: 5,
    text: "Works great! Very happy, thanks!",
    tag: "Verified Buyer",
  },
];

// Duplicate for seamless loop
const allReviews = [...reviews, ...reviews];

export default function ReviewsBanner() {
  return (
    <section className="w-full bg-sonnet-cream py-16 overflow-hidden border-t border-sonnet-navy/5">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sonnet-navy tracking-tight">
              Highly Rated by Customers
            </h2>
            <p className="text-base text-sonnet-navy/60 mt-2 font-medium">Real reviews from real sleepers.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-sonnet-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-sonnet-navy">4.8 · 257 reviews</span>
          </div>
        </div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative">
        <div className="flex animate-marquee gap-6 w-max">
          {allReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[340px] flex-shrink-0 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-0.5 mb-3 text-sonnet-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-sonnet-navy/80 leading-relaxed mb-4 line-clamp-4 font-medium">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-sonnet-navy">{review.name}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-sonnet-accent bg-sonnet-accent/10 px-2 py-0.5 rounded-full">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
