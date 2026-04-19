import { useEffect, useState } from "react";

//Sections
import Gallery from "../Gallery/Gallery";
import Projects from "../Projects/Projects";

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState(null);

  const handlerGallery = (projectId) => {
    setActiveProject(projectId);
  };

  const handlerProject = () => {
    setActiveProject(null);
  };

  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <>
      <section>
        {activeProject === null && <Projects handlerGallery={handlerGallery} />}
        {activeProject !== null && (
          <Gallery
            activeProject={activeProject}
            handlerProject={handlerProject}
          />
        )}
      </section>
    </>
  );
}
