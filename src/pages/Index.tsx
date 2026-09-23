import { Hero } from "@/components/site/sections/Hero";
import { FounderSection } from "@/components/site/sections/FounderSection";
import { TrustMetrics } from "@/components/site/sections/TrustMetrics";
import { Services } from "@/components/site/sections/Services";
import { Process } from "@/components/site/sections/Process";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { Industries } from "@/components/site/sections/Industries";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { Pricing } from "@/components/site/sections/Pricing";
import { FAQ } from "@/components/site/sections/FAQ";
import { CTA } from "@/components/site/sections/CTA";
import { Contact } from "@/components/site/sections/Contact";

const Index = () => (
  <>
    <Hero />
    {/* <FounderSection /> */}
    <TrustMetrics />
    <Services />
    <Process />
    <Portfolio />
    <Industries />
    <Testimonials />
    {/* <Pricing /> */}
    <FAQ />
    <CTA />
    <Contact />
  </>
);

export default Index;
