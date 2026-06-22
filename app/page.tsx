import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Categories } from "@/components/categories";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <Categories />
      <Testimonials />
    </main>
  );
}
