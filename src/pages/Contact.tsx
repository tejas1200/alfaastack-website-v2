import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/sections/Contact";

const ContactPage = () => (
  <>
    <PageHeader
      eyebrow="Contact"
      title={<>Let's start a <span className="gradient-text">conversation</span></>}
      description="Send us the details. You'll hear back within 24 hours."
    />
    <Contact />
  </>
);

export default ContactPage;
