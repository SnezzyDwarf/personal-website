import { useEffect, useState } from "react";

import "./LandingBug.css";

import WindowsIcon from "../../../../../assets/ui/WindowsIcon";
import Window from "../../../../../assets/ui/Window";
import CloseIcon from "../../../../../assets/ui/CloseIcon";
import Box from "../../../ui/Box/Box";
import DangerIconOne from "../../../../../assets/ui/DangerIconOne";
import DangerIconTwo from "../../../../../assets/ui/DangerIconTwo";

export default function LandingBug({ handleNext }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev >= 20) return prev;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    if (count >= 20) {
      handleNext();
    }
  }, [count, handleNext]);

  return (
    <>
      <section className="section_landingintro">
        <div className="section_landingintro-content">
          <Box
            image={<WindowsIcon />}
            title={
              <p>
                S@st%m.e!e
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
            variant="terciary"
          >
            <div className="box_children">
              <div className="box_children-content">
                <DangerIconOne size={35} />
                <div className="box_children-content_text">
                  <div className="box_children-content_text-top">
                    <p className="glitch-title">
                      <strong>
                        <span aria-hidden="true">Glitch Found...</span> Glitch
                        Found...
                        <span aria-hidden="true">Glitch Found...</span>
                      </strong>
                    </p>
                    <DangerIconTwo size={20} />
                  </div>
                  <div className="box_children-content_text-bot">
                    <p className="glitch-text">
                      <span aria-hidden="true">Syst%m corr@pted</span> Syst%m
                      corr@pted
                      <span aria-hidden="true">Syst%m corr@pted</span>
                    </p>
                    <p>Is fake Relax </p>
                  </div>
                </div>
              </div>
              <div className="loading_box-bug">
                {Array.from({ length: 15 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
