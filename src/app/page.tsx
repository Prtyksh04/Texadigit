import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import AboutWithPromo from "./components/AboutWithPromo";
import CallToActionVideo from "./components/CallToActionVideo";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToActionSection from "./components/CallToActionSection";
import BlogSection from "./components/BlogSection";
import Testimonials from "./components/Testimonials";
import ClientSection from "./components/ClientSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PromoSection />
      <AboutWithPromo />
      <CallToActionVideo />
      <ServicesSection />
      <WhyChooseUs />
      <CallToActionSection />
      <BlogSection />
      <Testimonials />
      <ClientSection />
      <Footer />
    </>
  );
}
