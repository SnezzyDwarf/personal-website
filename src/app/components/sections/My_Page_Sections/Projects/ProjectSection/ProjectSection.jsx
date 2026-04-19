import { useState } from "react";

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
