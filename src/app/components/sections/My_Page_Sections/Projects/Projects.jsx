import "./Projects.css";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../../../translations";

//ui
import PasteIcon from "../../../../../assets/ui/PasteIcon";
import Box from "../../../ui/Box/Box";
import { useState } from "react";
import ProjectImage from "./ProjectsImage/ProjectImage";

//images
import a1 from "../../../../../assets/images/Multi_screen.png";
import a2 from "../../../../../assets/images/Phone_screen.png";
import a3 from "../../../../../assets/images/Multi_page.png";
import a4 from "../../../../../assets/images/Cantinho do amor desktop.png";
import a5 from "../../../../../assets/images/Cantinho do amor telemovel.png";
import a6 from "../../../../../assets/images/Cantinho do amor tablet.png";

const galleries = [
  {
    id: "innovatis",
    title: "INNOVATIS",
    images: [a1, a2, a3],
  },
  { id: "cantinho", title: "Cantinho do amor", images: [a4, a5, a6] },
];

export default function Projects() {
  const [flipped, setFlipped] = useState(false);

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const handlerClick = () => {
    setFlipped((prev) => !prev);
  };

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

                {flipped === false && (
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
                      className="section_projects-content_grid-single-bottom"
                      onClick={handlerClick}
                    >
                      <p> {t.viewProject}</p>
                    </div>
                  </div>
                )}

                {flipped === true && (
                  <div>
                    {galleries
                      .filter((g) => g.id === "innovatis")
                      .map((gallery) => (
                        <ProjectImage
                          key={gallery.id}
                          title={gallery.title}
                          images={gallery.images}
                          handlerClick={handlerClick}
                          variant="primary"
                        />
                      ))}
                  </div>
                )}
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
                  <p>{t.projectTwo}</p>
                </div>
                <div className="section_projects-content_grid-single-bottom">
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
                  <p>{t.projectThree}</p>
                </div>
                <div className="section_projects-content_grid-single-bottom">
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
                <div className="section_projects-content_grid-single-bottom">
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
