import Contacts from "../components/sections/My_Page_Sections/Contacts.jsx/Contacts";
import Me from "../components/sections/My_Page_Sections/My_section/Me";
import Projects from "../components/sections/My_Page_Sections/Projects/Projects";
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
        <Projects />
        <Tech />
        <Contacts />
      </main>
    </>
  );
}
