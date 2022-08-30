import React from 'react'
import styles from './getdirection.module.css'

function GetDirection() {
  return (
    <div className={styles.getDirection}>
    <div className={styles.GetDirection}>
        <h2 className={styles.text}>FOR MORE INQUERY CALL US <strong className={styles.number} style={{margin: "5px 5px"}}>03 111 172 172</strong> OR VISIT <a target="_blank" href="https://www.google.com/maps/place/ROsolution.pk+RO+Plant/@24.9238262,67.093018,21z/data=!4m13!1m7!3m6!1s0x0:0x53f2c3ea397b194c!2zMjTCsDU1JzI1LjQiTiA2N8KwMDUnMzQuNSJF!3b1!8m2!3d24.923714!4d67.0929086!3m4!1s0x0:0x990f446455ad6915!8m2!3d24.9237703!4d67.0929534?hl=en"> <button className={styles.button}> Get Direction</button></a></h2>
        </div>
    </div>
  )
}

export default GetDirection