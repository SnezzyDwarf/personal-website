import Box from "../../../ui/Box/Box";
import { useLanguage } from "./../../../context/LanguageContext";
import { translations } from "../../../../../translations";

import "./Me.css";

export default function Me() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  return (
    <>
      <section id="profile" className="section_me">
        <div className="section_me-content">
          <Box variant="quartenary" title={t.aboutTitle}>
            <div style={{ whiteSpace: "pre-line" }}>{t.description}</div>

            <div className="text_base">
              <div className="text_base-content">
                <p className="text_base-content-left">{t.status}</p>
                <p className="text_base-content-right">{t.ready}</p>
              </div>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
