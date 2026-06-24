import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/process";
import { Categories } from "@/components/categories";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <CTASection />
    </main>
  );
}
