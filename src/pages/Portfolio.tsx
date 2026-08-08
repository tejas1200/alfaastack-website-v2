import { PageHeader } from "@/components/site/PageHeader";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { CTA } from "@/components/site/sections/CTA";

const PortfolioPage = () => (
  <>
    <PageHeader
      eyebrow="Portfolio"
      title={<>Work we've <span className="gradient-text">shipped recently</span></>}
      description="A curated selection of web, mobile and SaaS projects across industries."
    />
    <Portfolio />
    <Testimonials />
    <CTA />
  </>
);

export default PortfolioPage;
