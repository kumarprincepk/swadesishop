import React, {useState} from "react";
import "../style/MidPage.css";
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MidPage() {
  const [value, setValue] = useState();
  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setValue(target.value);
    }
 };
  return (
    <>
    {/* <Header/> */}
      <nav class="bg-light mainpg">
        <div className="col-md-12">
          <div className="heading">
            <h2>CHANGE ADDRESS</h2>
            <span>
              <i class="fa-solid fa-plus" aria-hidden="true"></i>  ADD NEW ADDRESS
            </span>
          </div>

          <div className="add1">
          <div className="inradio">
            <input type="radio" value="home" checked={value === 'home'} onChange={handleChange}/>
            </div>
            <div className="addtext">
              <h5>Home Address</h5>
              <p>420 C, Tower B Noida 201301</p>
              <p>9856742232</p>
            </div>
            
          </div>

          <div className="add1">
          <div className="inradio">
            <input type="radio" value="office" checked={value === 'office'} onChange={handleChange} />
            </div>
            <div className="addtext">
              <h5>Office Address</h5>
              <p>420 C, Tower B Noida 201301</p>
              <p>9856742232</p>
            </div>
            
          </div>
        </div>
      </nav>
      {/* <Footer/> */}
    </>
  );
}
