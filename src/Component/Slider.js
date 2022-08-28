import video from "../Assets/RoPlant.mp4";
import styles from "./slider.module.css";


function Slider() {
  return (
    <video className={styles.video} controls autoPlay muted>
      <source src={video} type="video/mp4"></source>
    </video>
  );
}
export default Slider;
