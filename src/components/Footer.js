import React from 'react';
import '../style/Footer.css';
import shipTra from '../assets/images/shippping-icon.png';
import smiley from '../assets/images/smiley-icon.png';
import india from '../assets/images/india-icon.png';
import guarranted from '../assets/images/guarranted-icon.png';

export default function Footer() {
  return (
      <>

     {/* free shipping */}
    <nav class="navbar-light bg-light navfull">
  <div class="container-fluid imgicon">
  <div className='imageclass fee'>
    <img src={shipTra} alt="shippingicon" />
    </div>
    <div className='free'>
        <h5>FREE SHIPPING</h5>
        <p>On purchase over &#8377; 9,999</p>
    </div>

  </div>

  <div class="container-fluid imgicon">
  <div className='imageclass'>
    <img src={smiley} alt="shippingicon" />
    </div>
    <div className='free'>
        <h5>99% SATISFIED CUSTOMERS</h5>
        <p>Our client's opinions speak for themselves</p>
    </div>

  </div>

  <div class="container-fluid imgicon">
  <div className='imageclass'>
    <img src={india} alt="shippingicon" />
    </div>
    <div className='free'>
        <h5>"MADE IN INDIA"</h5>
        <p>All the products are made in INDIA</p>
    </div>

  </div>

  <div class="container-fluid imgicon">
    <div className='imageclass'>
    <img src={guarranted} alt="shippingicon" />
    </div>
    <div className='free faa'>
        <h5>ORIGINALITY GUARANTEED</h5>
        <p>30 days warranty for each product from our store</p>
    </div>

  </div>
</nav>
 </>
  )
}
