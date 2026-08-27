import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Offerings from "@/components/offerings";
import HowItWorks from "@/components/howItWorks";
import About from "@/components/about";
import Enquiry from "@/components/enquiry";
// import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Offerings />
        <HowItWorks />
        <About />
        <Enquiry />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </>
  );
}
