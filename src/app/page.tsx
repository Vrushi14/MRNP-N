import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheFirm from "@/components/TheFirm";
import Services from "@/components/Services";
import Locations from "@/components/Locations";
import WhyUs from "@/components/WhyUs";
import HereToHelp from "@/components/HereToHelp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <TheFirm />
      <Services />
      <Locations />
      <WhyUs />
      <HereToHelp />
      <Footer />
    </main>
  );
}




