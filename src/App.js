import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactList from "./components/ContactForm/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
        {/* </Section>
        <Section> */}
          <ContactList />
        </Section>
        <ToastContainer position="top-center" />
    </>
  );
};

export default App;
