import React from "react";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact";
import styles from "./foooter.module.css";
import logo from "../Assets/nestleLogo.png";
import Foorm from "./Form";

// ICONS
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Foooter = () => {
  return (
    <div className={styles.foooter}>
      <CDBFooter className={styles.shadow}>
        <CDBBox
        className={styles.footer}
          display="flex"
          flex="column"
          // className="mx-auto py-3"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className={styles.flexWrap}>
            <CDBBox>
              {/* <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ml-3 h5 font-weight-bold align-item-center border 1px-solid-black">About</span>
            </a> */}
              <p
              className={styles.headings}
                // className="h5 mb-4"
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                About
              </p>
              <p className="my-3" style={{ width: "300px", fontSize: "1em",textAlign:"left", marginRight:"1px", padding:"10px" }}>
                ROSolution Water Treatment Company<br/> one of the finest
                companies in Pakistan dealing in water treatment systems<br /> right
                from concept till commissioning, followed by quality after sales
                services & maintenance. We serve environment with passion and
                commitment.
              </p>
            </CDBBox>
            <div className={styles.vl2}></div>
            <CDBBox>
              <p
                className="h5 mb-4"
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Quick Link
              </p>
              <CDBBox
                className={styles.quickLink}
                flex="column"
                display="flex"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <CDBFooterLink
                  href="/"
                  style={{ fontSize: "1.3em", marginBottom: "5px" }}
                >
                  Home
                </CDBFooterLink>
                <CDBFooterLink
                  href="/"
                  style={{ fontSize: "1.3em", marginBottom: "5px" }}
                >
                  Products
                </CDBFooterLink>
                <CDBFooterLink
                  href="/"
                  style={{ fontSize: "1.3em", marginBottom: "5px" }}
                >
                  Services
                </CDBFooterLink>
                <CDBFooterLink
                  href="/"
                  style={{ fontSize: "1.3em", marginBottom: "5px" }}
                >
                  Projects
                </CDBFooterLink>
                <CDBFooterLink
                  href="/"
                  style={{ fontSize: "1.3em", marginBottom: "5px" }}
                >
                  Profile
                </CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <div className={styles.vl2}></div>
            <CDBBox>
              <p
                className="h5 mb-4"
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Get A Quote
              </p>
              <CDBBox
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <Foorm />
              </CDBBox>
            </CDBBox>
            <div className={styles.vl2}></div>

            <CDBBox>
              <p
                className="h5 mb-4"
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  // marginTop:"5px" 
                }}
              >
                Get In Touch
              </p>
              <CDBBox
                className={styles.getInTouch}
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <div className={styles.iconLocation}>
                <LocationOnIcon color="primary" className="iconLocation" /><br />
                <p style={{fontSize:"12px",marginRight:"10px", textAlign:"left"}}>Office # 15/FL-6, Block-6, Near<br /> Dacca  Sweets, Main Rashid Minhas <br /> Road, Gulshan-e-Iqbal, Karachi,<br/> Sindh-75300</p>
                </div>
                
                <div className={styles.iconLocation}>
                <EmailIcon color="primary" className="iconEmail" />
                <p style={{fontSize:"12px",marginLeft:"7px", textAlign:"left"}}>info@rosolutionpk.com</p>
                </div> 
                
                <div className={styles.socialIcon}>
                <FacebookIcon color="primary" className="icon" style={{fontSize:"30px", marginRight:"10px"}}/>
                <br />
                <YouTubeIcon style={{ color: "red", fontSize:"30px" }} className="icon" />
                </div>

                {/* <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink> */}
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className={styles.copyright}>
             Copyright © 2022 RO Solution. All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
};
