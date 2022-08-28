import styles from "./Header.module.css";
import logo from "../Assets/RO Plant.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img src={logo} alt="logo.png" height={150} />
      </div>
      <div className={styles.socialIcon}>
        <div className={styles.icons1}>
          <FacebookIcon color="primary" className={styles.icon} style={{ color: "primary", fontSize:"35px" }}/>
          <YouTubeIcon style={{ color: "red", fontSize:"35px" }}/>
        </div>
        <div className={styles.icons1}>
          <InstagramIcon  className={styles.icon} style={{  fontSize:"35px" }}/>
          <LinkedInIcon color="primary" style={{  fontSize:"35px" }}/>
        </div>
        <Button variant="primary" style={{fontWeight:"bold"}}>QUERY</Button>{' '}
      </div>
    </div>
  );
}
export default Header;
