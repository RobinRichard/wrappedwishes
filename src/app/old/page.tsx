import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/process";
import { Categories } from "@/components/categories";
import { Testimonials } from "@/components/testimonials";
import { Enquiry } from "@/components/enquiry";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Categories />
      <HowItWorks />
      <Enquiry />
      <Testimonials />
      <Footer />
    </main>
  );
}
