import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter,FiInstagram} from "react-icons/fi"
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>This is the address</p>
        <p className='p__opensans'>This is the mobile no.</p>
        <p className='p__opensans'>This is the phone no.</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="gericht"/>
        <p className='p__opensans'>The best way to find yourself is to lose in service of others</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Working hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>8 to 12</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>10 to 2</p>
      </div>
      <div className='app__footer-links_work'>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'> &copy; All rights reserved</p>
    </div>
  </div>
);

export default Footer;
