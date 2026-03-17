import Header from "@/components/Header";
import HeroSequence from "@/components/HeroSequence";
import ProductAccordions from "@/components/ProductAccordions";
import TrustStrip from "@/components/TrustStrip";
import ReviewsBanner from "@/components/ReviewsBanner";
import ProblemSection from "@/components/ProblemSection";
import StressSection from "@/components/StressSection";
import IngredientsSection from "@/components/IngredientsSection";
import WhyItWorks from "@/components/WhyItWorks";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <HeroSequence />
        <ProductAccordions />
        <TrustStrip />
        <ReviewsBanner />
        <ProblemSection />
        <StressSection />
        <IngredientsSection />
        <WhyItWorks />
        <FAQSection />
        <FinalCTA />
      </main>
    </>
  );
}
