import Contacts from "../components/sections/My_Page_Sections/Contacts.jsx/Contacts";
import Me from "../components/sections/My_Page_Sections/My_section/Me";
import ProjectSection from "../components/sections/My_Page_Sections/Projects/ProjectSection/ProjectSection";

import Tech from "../components/sections/My_Page_Sections/Techs/Techs";
import NavBar from "../components/ui/Navbar/Navbar";

export default function MyPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Me />
        <ProjectSection />
        <Tech />
        <Contacts />
      </main>
    </>
  );
}
