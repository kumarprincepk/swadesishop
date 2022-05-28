import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function ProductDetail2() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [count, setCount] = useState(0);

  // const decrementCount = () => setCount(count - 1);

  const 
    decrementCount =()=>{
      if(count>0){
        setCount(count-1)
      }
      else{
        setCount(count)
      }
    }
  

  const incrementCount = () => setCount(count + 1);
  return (
    <div>
      <h2 className="head1">
        Short Brown Synthetic Hair Wigs For Men Subtle Wavy <br /> Side Parting
        Natural Looking Men�S Wig (#4)
      </h2>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={34}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
      <div className="d-flex">
        <h2 className="head2">&#8377; 5999 </h2>
        <h2>&nbsp; &nbsp; &#8377;900</h2>
      </div>
      <div className="offer">
        <h6>83% off</h6>
      </div>
      <h5 className="sold"><b>Sold By :</b>  shashi Traders</h5>
      <div className="hsn">
        <h6>HSN Code : /</h6>
      </div>
      <div className="retur">
        <p>Non Returnable</p>
      </div>
      <div className="qty d-flex">
        <h6>QTY : </h6>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <div className="probutton">
        <span>
          <button className="btn btn-block addto">Add to Bag</button>
        </span>
        <span>
          <button className="btn btn-block buy">Buy Now</button>
          <i className=" wish"> Add to Wishlist</i>
        </span>
      </div>

      <div class="accordion w-50 my-5" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <h5>Check Delivery</h5>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
            <div className="inch">
            <input type="text" className="int" placeholder="Enter your area pincode" />
            <button className="btn check">Check</button>
            </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <h5>Product Description</h5>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <ul>
                <li>
                Hair Material: High quality heat resistant synthetic fiber wigs, which is very suitable for long term use, no skin allergies. Adjustable Cap Size: Circumference 22.5 inches, 100% breathable rose net make you feel comfortable. Two combs in front and Two adjustment straps can be linked to a fixed position to fit different head sizes. Wig Type: Very light, weight-0.12lb approx. Natural looking Side parting and soft touch, good texture, strong sense and long-lasting style. Occasion: Durable & affordable, Kalyss wigs suit for daily, party, fancy dress, halloween, cosplay or any other occasion you want.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <h5>Review & Ratings</h5>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            
          </div>
        </div>
        
              <h5 className="share">Share This</h5>
              <div className="icons">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              </div>
      </div>
    </div>
  );
}
