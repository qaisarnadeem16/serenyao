import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ContactForm from "@/components/pages/contact-us/ContactForm";

export default function ContactUs() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <SectionContainer maxWidth="2xl">
        <ContactForm />
      </SectionContainer>
    </>
  );
}

