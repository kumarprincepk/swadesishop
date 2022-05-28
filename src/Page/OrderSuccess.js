import React, {useState} from 'react'
import '../style/OrderSuccess.css';
import img from '../assets/images/ordersuccess-icon.png';
import img1 from "../assets/images/checkout-1.png";
import Footer from '../components/Footer';
import Header from '../components/Header';


export default function OrderSuccess() {
    const [count, setCount] = useState(0);
  const [price, setPrice] = useState(2490);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);
  const priceUpdate = (prevState) => setPrice(price * count);
  return (
    <>
    <Header/>
       <div className="all bg-light">
            <div className="first text-center">
                <img src={img} alt="oder_success image" />
                <h2>order success!</h2>
                <p>Your order has been Placed successfully! For <br /> more details check your account</p>
            </div>
            <div className="ordet d-flex justify-content-between">
                <h4>Order Details</h4>
                <h4>&#8377; 4,090</h4>
            </div>
            <div className="allboxitem d-flex">
          <div className="divimg">
            <img src={img1} alt="image" />
          </div>
          <div className="alltex d-flex">
          <div className="prodetail">
            <div className="txtprt1">
              <h4>twill mini dress</h4>
              <p>Color : BLACK</p>
              <p>
                Size : L
                <span>
                  QTY : <button className="bg-light" onClick={decrementCount}>-</button> {count}
                  <button className="bg-light" onClick={incrementCount}>+</button>
                </span>
              </p>
              <h5 onClick={priceUpdate}>&#8377; {price}</h5>
            </div>
            </div>
            </div>
        </div>
        <div className="p">
        <div className="payme">
            <h4>Payment Method</h4>
        </div>
        </div>
        <div className="carenwi">
            <p>cardnumber ends with 2301</p>
        </div>
        <div className="deliadd d-flex justify-content-between">
            <h4>Delivery Address</h4>
            <h4>Billing Details</h4>
        </div>
        <div className="jhodoe d-flex justify-content-between">
            <div className="one">
                <h4>Jhonath Doe</h4>
                <p>A-26 Sector 63, Noida, 213001 <br /> +91 - 1234567890</p>
            </div>
            <div className="two">
                <h4>Jhonath Doe</h4>
                <p>jhondoe@gmail.com</p>
            </div>
        </div>
       </div>
     <Footer/>  
    </>
  )
}
