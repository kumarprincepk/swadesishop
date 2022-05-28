import React from 'react'
import {FaPinterestP,FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai';
import {GrLinkedinOption} from 'react-icons/gr';
// import img from '../assets/images/logo.png'
import '../style/Footer2.css';

function Footer() {
  return (
    <div className='full_foo'>
      <div className="footer__top__container">
        <hr />
        <img src="http://54.245.144.158/swadesi_dev/public/website/assets/images/footerlogo-2.png" />
        <hr />
      </div>
      <div className="footer__second__container">
        <div>
          <p>About swadeshi.com</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer__icons">
          <AiOutlineTwitter className="footer__icons" />
          <AiOutlineInstagram className="footer__icons" />
          <FaFacebookF className="footer__icons" />
          <GrLinkedinOption className="footer__icons" />
          <FaPinterestP className="footer__icons" />
        </div>
        <div>
          <p>Shipping info</p>
          <p>Return/Exchange</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footer__bottom__container">
      <button className=' sellon'><h5>sell on swadesi</h5></button>
        <div className="footer__vertical my-4"></div>
       <div className="para">
           <p>Subscribe for our news and offers</p>
       </div>
        <div className="input__container__footer">
          <input placeholder="Please enter your email address" />
          <p>Subscribe</p>
        </div>
        <h5 className='my-3'>Copy Rights 2020 @swadesi.com</h5>
      </div>
    </div>
  );
}

export default Footer