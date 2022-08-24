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
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              About
            </p>
            <p className="my-3" style={{ width: '250px' }}>
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
          <div className="vl"></div>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Quick Link
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Home</CDBFooterLink>
              <CDBFooterLink href="/">Products</CDBFooterLink>
              <CDBFooterLink href="/">Services</CDBFooterLink>
              <CDBFooterLink href="/">Projects</CDBFooterLink>
              <CDBFooterLink href="/">Profile</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <div className="vl"></div>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Get A Quote
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Foorm />
            </CDBBox>
          </CDBBox>
          <div className="vl"></div>

          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Get In Touch
            </p>
            <CDBBox className="getInTouch" display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
        <LocationOnIcon />
        <br/>
        <DialpadIcon />
        <br/>
        <EmailIcon />
        <br/>
        <FacebookIcon />
        <br/>
        <YouTubeIcon />

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