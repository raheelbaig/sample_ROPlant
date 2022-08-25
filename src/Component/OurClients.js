import React from "react";

import styles from "./ourclients.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import image4 from "../Assets/4.png";
import image5 from "../Assets/5.png";
import image6 from "../Assets/6.png";
import image7 from "../Assets/7.png";
import image8 from "../Assets/8.png";
import image9 from "../Assets/9.png";
import image10 from "../Assets/10.png";
import image11 from "../Assets/11.png";
import image12 from "../Assets/12.png";
import image13 from "../Assets/13.png";
import image14 from "../Assets/14.png";
import image15 from "../Assets/15.png";
import image16 from "../Assets/16.png";
import image17 from "../Assets/17.png";
import image18 from "../Assets/18.png";

function OurClients() {
  return (
    <div>
      <h1 className={styles.heading}>Our Valuable Clients</h1>
      <div className={styles.slideshow}>
        <div className={styles.slideWrapper}>
          <div className={styles.slide}>
            <img className={styles.logos} src={image16} />
          </div>

          <div className={styles.slide}>
            <img className={styles.logos} src={image17} />
          </div>

          <div className={styles.slide}>
            <img className={styles.logos} src={image18} />
          </div>

          <div className={styles.slide}>
            <img className={styles.logos} src={image4} />
          </div>

          <div className={styles.slide}>
            <img className={styles.logos} src={image5} />
          </div>

          <div className={styles.slide}>
            <img className={styles.logos} src={image6} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image7} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image8} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image9} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image10} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image11} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image12} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image13} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image14} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logos} src={image15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
