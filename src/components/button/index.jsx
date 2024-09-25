import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ children, type, color, disabled }) => {
  return (
    <button
      type={type}
      className={color === "primary" ? styles.primary : styles.secondary}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
