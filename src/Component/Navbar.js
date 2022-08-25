import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css';
function Navbar1() {
  return (
    <Navbar  bg="dark" expand="lg">
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle_menu}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3 cursor-pointer ms-5">
            <Nav.Link ><li style={{color:'white',fontSize:20,marginLeft:18}}>Home</li></Nav.Link>
            <Nav.Link ><li style={{color:'white',fontSize:20,marginLeft:18}}>Products</li></Nav.Link>
            <Nav.Link ><li style={{color:'white',fontSize:20,marginLeft:18}}>Services</li></Nav.Link>
            <Nav.Link ><li style={{color:'white',fontSize:20,marginLeft:18}}>Projects</li></Nav.Link>
            <Nav.Link ><li style={{color:'white',fontSize:20,marginLeft:18}}>Profile</li></Nav.Link>
            <Nav.Link ><li style={{color:'white',fontSize:20,marginLeft:18}}>Contact Us</li></Nav.Link>
            
            <Nav.Link href='tel:+923111172172'><li style={{color:'white',fontSize:20,marginLeft:60,backgroundColor:'#32cd32',borderRadius:999,paddingLeft:10,paddingRight:10,boxShadow: "-1px 11px 13px -3px rgba(92,102,96,0.77)" }}>Call Now</li></Nav.Link>           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;