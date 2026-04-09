import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  to,
  onClick,
  className = "",
  isLoading,
  disabled,
  ...props
}) {
  const moduleClassName = `${styles.btn} ${styles[variant] || ""} ${className}`;
  if (to) {
    return (
      <Link to={to} className={moduleClassName} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={moduleClassName}
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? "Loading" : children}
    </button>
  );
}
