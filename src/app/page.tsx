import Nav from "@/components/navs";
import Hero from "@/components/heros";
import Offerings from "@/components/offerin";
import HowItWorks from "@/components/hows";
import About from "@/components/abouts";
import Enquiry from "@/components/enquiries";
// import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/footers";

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
