export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import OurWork from "@/components/our-work";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <OurWork />
      <HowItWorks />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
