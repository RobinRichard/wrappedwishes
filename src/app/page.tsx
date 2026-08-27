import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import Offerings from "@/components/Offerings/Offerings";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import About from "@/components/About/About";
import Enquiry from "@/components/Enquiry/Enquiry";
// import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

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
