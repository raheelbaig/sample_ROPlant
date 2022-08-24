import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import './foooter.css';
import logo from '../Assets/nestleLogo.png'
import Foorm from './Form'

// ICONS
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DialpadIcon from '@mui/icons-material/Dialpad';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Foooter = () => {
  return (
    <div className='footer'>
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            {/* <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ml-3 h5 font-weight-bold align-item-center border 1px-solid-black">About</span>
            </a> */}
            <p className="h5 mb-4" style={{ fontWeight: '600', fontSize:"1.5em", fontWeight:"bold" }}>
              About
            </p>
            <p className="my-3" style={{ width: '250px', fontSize:"1.3em" }}>
            RO Solution Water Treatment 
Company is one of the finest 
companies in Pakistan dealing 
in water treatment systems 
right from concept till 
commissioning, followed by 
quality after sales services and 
maintenance. We serve 
environment with passion and 
commitment.
            </p>
          </CDBBox>
          <div className="vl2"></div>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600',fontSize:"1.5em", fontWeight:"bold" }}>
              Quick Link
            </p>
            <CDBBox className="quickLink" flex="column" display="flex" style={{ cursor: 'pointer', padding: '0'}}>
              <CDBFooterLink href="/" style={{fontSize:"1.3em", marginBottom:"5px"}}>Home</CDBFooterLink>
              <CDBFooterLink href="/" style={{fontSize:"1.3em", marginBottom:"5px"}}>Products</CDBFooterLink>
              <CDBFooterLink href="/" style={{fontSize:"1.3em", marginBottom:"5px"}}>Services</CDBFooterLink>
              <CDBFooterLink href="/" style={{fontSize:"1.3em", marginBottom:"5px"}}>Projects</CDBFooterLink>
              <CDBFooterLink href="/" style={{fontSize:"1.3em", marginBottom:"5px"}}>Profile</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <div className="vl2"></div>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', fontSize:"1.5em", fontWeight:"bold" }}>
              Get A Quote
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Foorm />
            </CDBBox>
          </CDBBox>
          <div className="vl2"></div>

          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', fontSize:"1.5em", fontWeight:"bold" }}>
              Get In Touch
            </p>
            <CDBBox className="getInTouch" display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
        <LocationOnIcon className='icon'/>
        <br/>
        <DialpadIcon className='icon'/>
        <br/>
        <EmailIcon className='icon'/>
        <br/>
        <FacebookIcon className='icon'/>
        <br/>
        <YouTubeIcon className='icon'/>

              {/* <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink> */}
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; RO Plant 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
    </div>
  );
};