import ProjectImage from "../../../../ui/ProjectsImage/ProjectImage";

import "./Gallery.css";

//images
import a1 from "../../../../../../assets/images/mockUpDesktop2.png";
import a2 from "../../../../../../assets/images/MockUp myphone.png";
import a3 from "../../../../../../assets/images/MockUpMyDesktop.png";
import a4 from "../../../../../../assets/images/MockupMYlaptop.png";
import a5 from "../../../../../../assets/images/mokUp rsvg phone.png";
import a6 from "../../../../../../assets/images/MockUpdesktopRsvg.png";
import a7 from "../../../../../../assets/images/MockUpTablet RSVP.png";
import a9 from "../../../../../../assets/images/MockUpDesktopInnovatis.png";
import a10 from "../../../../../../assets/images/Innovatis laptop.png";
import a11 from "../../../../../../assets/images/innovastisphone.png";
import a12 from "../../../../../../assets/images/InnovatisPage.png";
import a13 from "../../../../../../assets/images/Cantinho do amor desktop.png";
import a14 from "../../../../../../assets/images/Cantinho do amor telemovel.png";
import a15 from "../../../../../../assets/images/Cantinho do amor tablet.png";
import a16 from "../../../../../../assets/images/CantinhoFullPage.png";
import a17 from "../../../../../../assets/images/RSVPFullPage.png";

const galleries = [
  {
    id: "portefolio",
    title: "MyPortefolio",
    images: [a1, a2, a3, a4],
    href: "https://personal-website-rmel2z4ln-snezzydwarfs-projects.vercel.app/",
  },
  { id: "RSVP", title: "RSVP", images: [a5, a6, a7, a17] },
  { id: "Innovatis", title: "innovatis", images: [a9, a10, a11, a12] },
  {
    id: "cantinho",
    title: "Cantinho do Amor",
    images: [a13, a14, a15, a16],
    href: "https://cantinho-do-amor-landing-7oahdpe74-snezzydwarfs-projects.vercel.app",
  },
];

export default function Gallery({ handlerProject, activeProject }) {
  const gallery = galleries.find((g) => g.id === activeProject);

  if (!galleries) return null;

  return (
    <>
      <section className="section_gallery">
        <div className="section_gallery-content">
          <ProjectImage
            key={gallery.id}
            title={<h3>{gallery.title}</h3>}
            images={gallery.images}
            handlerClick={handlerProject}
            variant="primary"
            href={gallery.href}
          />
        </div>
      </section>
    </>
  );
}
