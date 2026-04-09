import "./LandingIntro.css";

import Box from "../../../ui/Box/Box.jsx";

import WindowsIcon from "../../../../../assets/ui/WindowsIcon.jsx";
import CloseIcon from "../../../../../assets/ui/CloseIcon.jsx";
import Window from "../../../../../assets/ui/Window.jsx";
import Button from "../../../../components/ui/Button/Button.jsx";

import { useLanguage } from "../../../context/LanguageContext.jsx";
import { translations } from "../../../../../translations.js";

export default function LandingIntro({ handleLoading }) {
  const { language } = useLanguage();
  const t = translations[language] || translations.eng;
  return (
    <>
      <section className="section_landingintro">
        <div className="section_landingintro-content">
          <Box
            image={<WindowsIcon />}
            title={
              <p>
                System.exe
                <div className="box_title">
                  <span>
                    <Window />
                  </span>
                  <span>
                    <CloseIcon size={14} />
                  </span>
                </div>
              </p>
            }
            variant="primary"
          >
            <div className="box_children">
              <div>
                <p>
                  <strong>{t.box1}</strong>{" "}
                </p>
              </div>
              <div className="box_buttons">
                <Button variant="primary" onClick={handleLoading}>
                  <strong>{t.buttonYes}</strong>
                </Button>
                <Button variant="primary" disabled>
                  <strong>{t.buttonNo}</strong>
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
