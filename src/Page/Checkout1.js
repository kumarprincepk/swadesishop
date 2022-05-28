import React, {useState} from 'react'
import img from "../assets/images/checkout-1.png";
import img1 from "../assets/images/checkout-2.png";
import '../style/EditOrder.css';


export default function Checkout1() {
    const [count, setCount] = useState(0);
  const [price, setPrice] = useState(2490);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);
  const priceUpdate = (prevState) => setPrice(price * count);
  return (
    <>
    <div>
      <div className="main bg-light">
        <h4>
          <i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;MY BAG (2 ITEM)
        </h4>
        <div className="bor"></div>
        <div className="allboxitem d-flex">
          <div className="divimg">
            <img src={img} alt="image" />
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
          
            <div className="txtprt2 d-flex">
              <div className="edi">
              <i class="fa-solid fa-pencil"></i>
                <p>Edit</p>
              </div>
            </div>
            </div>
            </div>
        </div>
        <div className="bor"></div>
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
          
          <div className="txtprt2 d-flex">
              <div className="edi">
              <i class="fa-solid fa-pencil"></i>
                <p>Edit</p>
              </div>
            </div>
            </div>
            </div>
        </div>
        <div className="bor"></div>
      </div>
    </div>

    </>
  )
}
