import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/process";
import { Categories } from "@/components/categories";
import { Testimonials } from "@/components/testimonials";
import { Enquiry } from "@/components/enquiry";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <HowItWorks />
      <Enquiry />
      <Testimonials />
    </main>
  );
}
