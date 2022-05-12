import React from "react";
import { ContactForm, Faqs } from "../components/pagesExport";
const ContactPage = () => {
  return (
    <>
      <main className="theme-background-second-layer d-flex-direction">
        <ContactForm />
        <Faqs />
        {/* <h1>Hweewe</h1> */}
      </main>
    </>
  );
};

export default ContactPage;
