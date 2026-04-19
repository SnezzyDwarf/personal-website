import { useState } from "react";

import styles from "./ProjectImage.module.css";
import Button from "../Button/Button";

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
            className={`${styles.container} ${styles[variant] || ""} ${className || ""}`}
          >
            {title && (
              <div className={styles.title}>
                <h3>{title}</h3>
                <Button
                  variant="terciary"
                  onClick={handlerClick}
                  className={styles.buttonFocus}
                >
                  &#x2716;
                </Button>
              </div>
            )}

            <div className={`${styles.content}`}>
              <div className={`${styles.wrapper}`}>
                {images.map((img, i) => (
                  <div
                    className={`${styles.imageWrapper}`}
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                  >
                    <img src={img} alt="" className={`${styles.media}`} />
                  </div>
                ))}
              </div>

              <div className={`${styles.buttons}`}>
                {href ? (
                  <Button to={href} defer target="_blank" variant="secondary">
                    Want to see the Project
                  </Button>
                ) : (
                  <Button variant="secondary" disabled>
                    Comming Soon
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/*photo zoom */}

        {selectedIndex !== null && (
          <div
            className={`${styles.zoom} ${styles[variant] || ""} ${className || ""}`}
            onClick={() => setSelectedIndex(null)}
          >
            <div className={styles.zoom_content}>
              <Button
                variant="terciary"
                onClick={handlerClick}
                className={styles.buttonFocus}
                onClick={() => setSelectedIndex(null)}
              >
                &#x2716;
              </Button>

              <div className={styles.zoom_content_screen}>
                <Button
                  onClick={handlerBack}
                  variant="terciary"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <span></span>
                </Button>
                <div className={styles.image_Wrapper}>
                  <img
                    src={images[selectedIndex]}
                    alt=""
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                <Button onClick={handlerNext} variant="terciary">
                  <span></span>
                </Button>
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
