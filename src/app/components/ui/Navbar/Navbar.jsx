import "./navbar.css";

import CodeIcon from "../../../../assets/ui/CodeIcon";
import LetterIcon from "../../../../assets/ui/LetterIcon";
import PasteIcon from "../../../../assets/ui/PasteIcon";
import PersonIcon from "../../../../assets/ui/PersonIcon";
import { useState } from "react";

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <nav className="navbar">
        <ul className="navbar_content">
          <li
            className={`navbar_content-part ${activeIndex === 0 ? "clicked" : ""}`}
            onClick={() => setActiveIndex(0)}
          >
            <a href="#profile" aria-label="profile">
              <PersonIcon size={28} />
            </a>
          </li>
          <li
            className={`navbar_content-part ${activeIndex === 1 ? "clicked" : ""}`}
            onClick={() => setActiveIndex(1)}
          >
            <a href="#projects" aria-label="projects">
              <PasteIcon size={28} />
            </a>
          </li>

          <li
            className={`navbar_content-part ${activeIndex === 2 ? "clicked" : ""}`}
            onClick={() => setActiveIndex(2)}
          >
            <a href="#languages" aria-label="languages">
              <CodeIcon size={28} />
            </a>
          </li>

          <li
            className={`navbar_content-part ${activeIndex === 3 ? "clicked" : ""}`}
            onClick={() => setActiveIndex(3)}
          >
            <a href="#message" aria-label="message">
              <LetterIcon size={28} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
