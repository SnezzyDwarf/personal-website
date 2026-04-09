import "./ChooseLanguage.css";

import Button from "../../../ui/Button/Button";
import Box from "../../../ui/Box/Box";

import WindowsIcon from "../../../../../assets/ui/WindowsIcon";
import Window from "../../../../../assets/ui/Window";
import CloseIcon from "../../../../../assets/ui/CloseIcon";

export default function ChooseLanguage({ handleLanguage }) {
  return (
    <>
      <section className="section_language">
        <div className="section_language-content">
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
            <div className="section_language-content_buttons">
              <div>
                <Button onClick={() => handleLanguage("en")}>English</Button>
              </div>
              <div>
                <Button onClick={() => handleLanguage("pt")}>Português</Button>
              </div>
              <div>
                <Button onClick={() => handleLanguage("es")}>Español</Button>
              </div>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
