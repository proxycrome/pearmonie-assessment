import PropTypes from "prop-types";
import styles from "./input.module.css";


const Input = ({ type, placeholder, name, value, handleChange, icon: Icon }) => {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className={styles.formControl}
      />
      <div className={styles.icon}>
        <Icon color="#ffffff" />
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.any
};

export default Input;
