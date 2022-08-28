import React from "react";
import styles from './ourvalue.module.css'

function Ourvalue() {
  return (
    <div className={styles.ourValue}>
      <div className={styles.content}>
        <h1>Our Value</h1>  
        <p>
        We work hard to earn and retain trust and respect. From the speed of response, access to technical insights. We value the ability of our staff and company to honour its commitments, to customers and to each other. 
        </p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.content}>
        <h1>Mission</h1>
        <p>
        Our mission is to grant protected and less expensive drinking water and to explore choice water assets for Pakistani humans and particularly the residents of Karachi via assisting them. RO Plant Karachi.
        </p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.content}>
        <h1>Vision</h1>
        <p>
        Our vision is to be the most trusted provider of water associated applied sciences that make sure the Health and activism of our country and its allies. As the science leader of water-related industries, we will secure the future of our nation.
        </p>
      </div>
    </div>
  );
}

export default Ourvalue;
