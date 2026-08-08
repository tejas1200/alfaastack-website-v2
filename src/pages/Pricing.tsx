import { PageHeader } from "@/components/site/PageHeader";
import { Pricing } from "@/components/site/sections/Pricing";
import { FAQ } from "@/components/site/sections/FAQ";
import { CTA } from "@/components/site/sections/CTA";

const PricingPage = () => (
  <>
    <PageHeader
      eyebrow="Pricing"
      title={<>Fair pricing, <span className="gradient-text">clearly stated</span></>}
      description="Pick a package or scope a custom engagement. No hidden costs."
    />
    <Pricing />
    <FAQ />
    <CTA />
  </>
);

export default PricingPage;
