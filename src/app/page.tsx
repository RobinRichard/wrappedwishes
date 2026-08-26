// import { Hero } from "@/components/hero";
// import { HowItWorks } from "@/components/process";
// import { Categories } from "@/components/categories";
// import { Testimonials } from "@/components/testimonials";
// import { Enquiry } from "@/components/enquiry";

import Nav from "@/new/Nav/Nav";
import Hero from "@/new/Hero/Hero";
import Offerings from "@/new/Offerings/Offerings";
import HowItWorks from "@/new/HowItWorks/HowItWorks";
import About from "@/new/About/About";
import Enquiry from "@/new/Enquiry/Enquiry";
import Testimonials from "@/new/Testimonials/Testimonials";
import Footer from "@/new/Footer/Footer";

export default function Home() {
  return (
    // <main>
    //   <Hero />
    //   <Categories />
    //   <HowItWorks />
    //   <Enquiry />
    //   <Testimonials />
    // </main>
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Offerings />
        <HowItWorks />
        <About />
        <Enquiry />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
