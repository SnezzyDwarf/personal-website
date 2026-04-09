import Box from "../../../ui/Box/Box";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../../../translations";

import "./Techs.css";

import HTMLIcon from "../../../../../assets/ui/HTMLIcon";
import PaintIcon from "../../../../../assets/ui/PaintIcon";
import JavaIcon from "../../../../../assets/ui/JavaIcon";
import ReactIcon from "../../../../../assets/ui/ReactIcon";
import MicrochipIcon from "../../../../../assets/ui/MicrochipIcon";

export default function Tech() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <section id="languages" className="section_techs">
        <div className="section_techs-content">
          <Box
            image={<MicrochipIcon />}
            variant="quartenary"
            title="Tech Stack"
          >
            <div className="section_techs-content_loading">
              <div className="section_techs-content_loading-title">
                <HTMLIcon />
                <h3>HTML5</h3>
              </div>
              <div className="section_techs-content_loading-bar">
                <span className="HTML_bar"></span>
              </div>
              <div className="section_techs-content_loading">
                <div className="section_techs-content_loading-title">
                  <PaintIcon />
                  <h3>CSS3</h3>
                </div>
                <div className="section_techs-content_loading-bar">
                  <span className="css_bar"></span>
                </div>
              </div>
              <div className="section_techs-content_loading">
                <div className="section_techs-content_loading-title">
                  <JavaIcon />
                  <h3>JavaScript</h3>
                </div>

                <div className="section_techs-content_loading-bar">
                  <span className="java_bar"></span>
                </div>
              </div>
              <div className="section_techs-content_loading">
                <div className="section_techs-content_loading-title">
                  <ReactIcon />
                  <h3>React</h3>
                </div>

                <div className="section_techs-content_loading-bar">
                  <span className="react_bar"></span>
                </div>
              </div>
            </div>
            <div className="section_techs-content_bottom">
              <div className="section_techs-content_bottom-right">
                <p>{t.techResources}</p>

                <p>{t.techStateOne}</p>
              </div>
              <div className="section_techs-content_bottom-left">
                <p>{t.techMode}</p>
                <p>{t.techStateTwo}</p>
              </div>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
