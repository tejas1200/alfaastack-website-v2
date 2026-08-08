import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/sections/Services";
import { Process } from "@/components/site/sections/Process";
import { Industries } from "@/components/site/sections/Industries";
import { CTA } from "@/components/site/sections/CTA";

const ServicesPage = () => (
  <>
    <PageHeader
      eyebrow="Services"
      title={<>Build. Launch. <span className="gradient-text">Grow.</span></>}
      description="From idea to launch—all in one place."
    />
    <Services />
    <Process />
    <Industries />
    <CTA />
  </>
);

export default ServicesPage;
