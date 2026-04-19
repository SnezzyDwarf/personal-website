import "./Projects.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../../../translations";
//ui
import PasteIcon from "../../../../../../assets/ui/PasteIcon";
import Box from "../../../../ui/Box/Box";

import ProjectImage from "../../../../ui/ProjectsImage/ProjectImage";

export default function Projects({ handlerGallery }) {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <section id="projects" className="section_projects">
        <div className="section_projects-content">
          <Box
            variant="quintenary"
            title={
              <div>
                <h3>{t.projectsTitle}</h3>
                <p>?%? items found</p>
              </div>
            }
          >
            <div className="section_projects-content_grid">
              <div className="section_projects-content_grid-single">
                <PasteIcon size={35} />

                <div>
                  <div>
                    <h4>{t.projectsType}</h4>
                    <p>Web Application</p>
                  </div>
                  <div>
                    <h4>Tech</h4>
                    <p>HTML5, CSS, Javasript, React</p>
                  </div>
                  <div>
                    <h4>{t.projectsDescription}</h4>
                    <p>{t.projectOne}</p>
                  </div>
                  <div
                    onClick={() => handlerGallery("portefolio")}
                    className="section_projects-content_grid-single-bottom"
                  >
                    <p> {t.viewProject}</p>
                  </div>
                </div>
              </div>

              <div className="section_projects-content_grid-single">
                <PasteIcon size={35} />

                <div>
                  <div>
                    <h4>{t.projectsType}</h4>
                    <p>Web Application</p>
                  </div>
                  <div>
                    <h4>Tech</h4>
                    <p>HTML5, CSS, Javasript, React</p>
                  </div>
                  <div>
                    <h4>{t.projectsDescription}</h4>
                    <p>{t.projectTwo}</p>
                  </div>
                  <div
                    className="section_projects-content_grid-single-bottom"
                    onClick={() => handlerGallery("RSVP")}
                  >
                    <p> {t.viewProject}</p>
                  </div>
                </div>
              </div>
              <div className="section_projects-content_grid-single">
                <PasteIcon size={35} />
                <div>
                  <h4>{t.projectsType}</h4>
                  <p>Web Application</p>
                </div>
                <div>
                  <h4>Tech</h4>
                  <p>HTML5, CSS, Javasript, React</p>
                </div>
                <div>
                  <h4>{t.projectsDescription}</h4>
                  <p>{t.projectThree}</p>
                </div>
                <div
                  className="section_projects-content_grid-single-bottom"
                  onClick={() => handlerGallery("Innovatis")}
                >
                  <p> {t.viewProject}</p>
                </div>
              </div>
              <div className="section_projects-content_grid-single">
                <PasteIcon size={35} />
                <div>
                  <h4>{t.projectsType}</h4>
                  <p>Web Application</p>
                </div>
                <div>
                  <h4>Tech</h4>
                  <p>HTML5, CSS, Javasript, React</p>
                </div>
                <div>
                  <h4>{t.projectsDescription}</h4>
                  <p>{t.projectFour}</p>
                </div>
                <div
                  className="section_projects-content_grid-single-bottom"
                  onClick={() => handlerGallery("cantinho")}
                >
                  <p> {t.viewProject}</p>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
