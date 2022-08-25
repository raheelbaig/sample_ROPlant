import React from "react";
import styles from "./whychoose.module.css";
import ProductCard from "./ProductCard";
import { display } from "@mui/system";
import image1 from '../Assets/1.png'
import image2 from '../Assets/2.png'
import image3 from '../Assets/3.png'

function WhyChoose() {
  return (
    <div className={styles.main}>
      <div >
      <h1 className={styles.whychoose}>WHY YOU CHOOSE US?</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.section1}>
          <img className={styles.image} src={image1} alt="logo" />
          <h3 className={styles.heading}>Superior Quality Equipment & Component</h3>
        </div>
        <div className={styles.section2}>
        <img className={styles.image} src={image2} alt="logo" />
        <h3 className={styles.heading}>Top No-tech Services & Workmanship</h3>
        </div>
        <div className={styles.section3}>
        <img className={styles.image} src={image3} alt="logo" />
        <h3 className={styles.heading}>Countless Successful <br/>Projects</h3>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;