import styles from "./Box.module.css";

export default function Box({
  variant = "primary",
  children,
  title,
  image,
  className = "",
}) {
  return (
    <div className={`${styles.box} ${styles[variant] || ""} ${className}`}>
      <div className={styles.content}>
        <div className={styles.title}>
          {image && <div className={styles.media}>{image}</div>}
          {typeof title === "string" ? <h3>{title}</h3> : title}
        </div>

        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
}
