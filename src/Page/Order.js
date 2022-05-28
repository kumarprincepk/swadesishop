import React, { useState } from "react";
import img from "../assets/images/checkout-1.png";
import img1 from "../assets/images/checkout-2.png";
import '../style/Order.css';
import ReactStars from "react-rating-stars-component";
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Order() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(2490);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);
  const priceUpdate = (prevState) => setPrice(price * count);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
    <Header/>
      <div className="bg-light all">
        <h4>MY ORDER</h4>
        <div className="bor"></div>
        <div className="allboxitem d-flex">
          <div className="divimg">
            <img src={img} alt="image" />
          </div>
          <div className="alltext d-flex">
            <div className="prodetail">
              <div className="txtprt1 col">
                <h4>twill mini dress</h4>
                <p>Color : BLACK</p>
                <p>
                  Size : L
                  <span>
                    QTY :{" "}
                    <button className="bg-light" onClick={decrementCount}>
                      -
                    </button>{" "}
                    {count}
                    <button className="bg-light" onClick={incrementCount}>
                      +
                    </button>
                  </span>
                </p>
                <h5 onClick={priceUpdate}>&#8377; {price}</h5>
              </div>

              <div className="txtprt2 d-flex flex-column ortxt">
                <p>Order ID: #12345</p>
                <p>Delivered on August 03,2020</p>
                <h6>Track Package</h6>
            <div className="review">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  halfIcon={<i class="fa-solid fa-star-half-stroke"></i>}
                  fullIcon={<i class="fa-solid fa-star"></i>}
                  activeColor="red"
                /> <span>Write a Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="allboxitem d-flex">
          <div className="divimg">
            <img src={img1} alt="image" />
          </div>
          <div className="alltex d-flex">
            <div className="prodetail">
              <div className="txtprt1 col">
                <h4>twill mini dress</h4>
                <p>Color : BLACK</p>
                <p>
                  Size : L
                  <span>
                    QTY :{" "}
                    <button className="bg-light" onClick={decrementCount}>
                      -
                    </button>{" "}
                    {count}
                    <button className="bg-light" onClick={incrementCount}>
                      +
                    </button>
                  </span>
                </p>
                <h5 onClick={priceUpdate}>&#8377; {price}</h5>
              </div>

              <div className="txtprt2 d-flex flex-column">
                <p>Order ID: #12345</p>
                <p>Delivered on August 03,2020</p>
                <h6>Track Package</h6>
                <div className="review">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={34}
                  isHalf={true}
                  halfIcon={<i class="fa-solid fa-star-half-stroke"></i>}
                  fullIcon={<i class="fa-solid fa-star"></i>}
                  activeColor="red"
                /><span>Write a Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
