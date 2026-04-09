import emailjs from "@emailjs/browser";
import { translations } from "../../../../../translations";
import { useLanguage } from "../../../context/LanguageContext";

import "./Contacts.css";

import Box from "../../../ui/Box/Box";
import Button from "../../../ui/Button/Button";

export default function Contacts() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_x2f5079", "template_tns9ish", e.target, {
        publicKey: "GPuSmf8VMcgdjb2Cu",
      })
      .then(
        (result) => {
          console.log("Send!", result.text);
        },
        (error) => {
          console.log("error", error.text);
        },
      );
    e.target.reset();
  }

  return (
    <>
      <section className="section_contacts">
        <div className="section_contacts-content">
          <Box variant="sextanary" title={<h3>{t.titleContact}</h3>}>
            <form onSubmit={handleSubmit}>
              <div className="section_contacts-content-form">
                <div className="section_contacts-content-form_input">
                  <label htmlFor="name">{t.userName}</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="section_contacts-content-form_input">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="section_contacts-content-form_input">
                  <label htmlFor="message">{t.userMessage}</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder={t.messageHolder}
                    required
                  ></textarea>
                </div>

                <div className="section_contacts-content-form_buttons">
                  <Button type="submit">{t.buttonSend}</Button>
                  <Button style={{ cursor: "none" }} disabled>
                    {t.buttonNotSend}
                  </Button>
                </div>
              </div>
            </form>
          </Box>
        </div>
      </section>
    </>
  );
}
