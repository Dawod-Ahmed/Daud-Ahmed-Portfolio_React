import React,{useEffect} from "react";
import { ContactForm, Faqs } from "../components/pagesExport";
const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Dawood Ahmed";
  }, []);

  return (
    <>
      <main className="theme-background-second-layer d-flex-direction">
        {/* <ContactForm /> */}
        <Faqs />
        {/* <h1>Hweewe</h1> */}
      </main>
    </>
  );
};

export default ContactPage;
