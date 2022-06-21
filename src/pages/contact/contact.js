import React,{useEffect} from "react";
import { ContactForm, Faqs } from "../components/pagesExport";
const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Dawood Ahmed";
  }, []);

  return (
    <>
      <main className="w-100 d-flex-direction">
        <ContactForm />
        <Faqs />
      </main>
    </>
  );
};

export default ContactPage;
