import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/sections/Process";
import { CTA } from "@/components/site/sections/CTA";

const ProcessPage = () => (
  <>
    <PageHeader
      eyebrow="Process"
      title={<>The path from idea to <span className="gradient-text">production</span></>}
      description="A calm, predictable process that keeps everyone aligned."
    />
    <Process />
    <CTA />
  </>
);

export default ProcessPage;
