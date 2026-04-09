import { useEffect, useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../../../translations";
import Box from "../../../ui/Box/Box";

import "./LandingLoading.css";

import WindowsIcon from "../../../../../assets/ui/WindowsIcon";
import CloseIcon from "../../../../../assets/ui/CloseIcon";
import Window from "../../../../../assets/ui/Window";

export default function LandingLoading({ handleBug }) {
  const [count, setCount] = useState(0);

  const { language } = useLanguage();
  const t = translations[language] || translations.eng;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 60) {
          clearInterval(interval);
          handleBug();
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [handleBug]);

  return (
    <>
      <section className="section_loading">
        <div className="section_loading-content">
          <Box
            variant="secondary"
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
          >
            <div className="box_children">
              <div className="box_children-text">
                <p>{t.boxLoading}</p>
              </div>
              <div className="loading_box">
                {Array.from({ length: 15 }).map((_, i) => (
                  <span
                    key={i}
                    style={{ animationDelay: `${i * 0.4}s` }}
                  ></span>
                ))}
              </div>
            </div>
            <div>
              <p>{count}%</p>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
