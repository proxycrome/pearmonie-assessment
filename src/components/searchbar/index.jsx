import PropTypes from "prop-types";
import { Search } from "lucide-react";
import styles from "./searchbar.module.css";

const Searchbar = ({ background }) => {
  return (
    <div className={styles.searchWrapper}>
      <Search className={styles.searchIcon} />
      <input
        type="search"
        placeholder="Search"
        style={{ background }}
      />
    </div>
  );
};

Searchbar.propTypes = {
    background: PropTypes.string.isRequired,
}

export default Searchbar;
