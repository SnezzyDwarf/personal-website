import { useState } from "react";

import styles from "./ProjectImage.module.css";
import Button from "../../../../ui/Button/Button";

export default function ProjectImage({
  title,
  images,
  href,
  handlerClick,

  variant = "primary",
  className = "",
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlerNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlerBack = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };
  return (
    <>
      <section>
        {selectedIndex === null && (
          <div
            className={`${styles.gallery} ${styles[variant] || ""} ${className || ""}`}
          >
            {title && <h3 className={styles.title}>{title}</h3>}
            <div className={`${styles.content}`}>
              <div className={`${styles.grid}`}>
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => setSelectedIndex(i)}
                    className={`${styles.media}`}
                  />
                ))}
              </div>

              <div className={`${styles.buttons}`}>
                <Button to={href} variant="secondary">
                  Want to see my Project
                </Button>

                <Button onClick={handlerClick}> voltar</Button>
              </div>
            </div>
          </div>
        )}

        {selectedIndex !== null && (
          <div
            className={`${styles.zoom} ${styles[variant] || ""} ${className || ""}`}
            onClick={() => setSelectedIndex(null)}
          >
            <div className={styles.zoom_content}>
              <Button onClick={() => setSelectedIndex(null)}>X</Button>
              <div className={styles.zoom_content_screen}>
                <Button onClick={handlerBack}>BACK</Button>
                <img
                  src={images[selectedIndex]}
                  onClick={(e) => e.stopPropagation()}
                />

                <Button onClick={handlerNext}>NEXT</Button>
              </div>
              <div className={styles.dot_length}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
