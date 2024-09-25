import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import styles from "./showcase.module.css";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <img src={image1} alt="image1" />
      <img src={image2} alt="image2" />
      <img src={image3} alt="image3" />
      <img src={image4} alt="image4" />
      <img src={image5} alt="image5" />
    </div>
  );
};

export default Showcase;
