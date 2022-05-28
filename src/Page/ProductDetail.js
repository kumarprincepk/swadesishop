import React,{useState} from "react";
import img from "../assets/images/proimg1.jpeg";
import img2 from "../assets/images/proimage2.jpeg"
import '../style/ProductDetail.css';

export default function ProductPage() {
    const [src,setSrc]=useState(img);
  return (
    <div className="togethe">
 <div className="first">
     <div className="first_1">
     {/* <a href="https://swadesi.s3.ap-south-1.amazonaws.com/uploads/product/17679/21630587615_17679.png" target="_self">
     <img src={img} alt="" /> */}
         <img className="imgclas" src={img} alt="" width="80" onMouseOver={()=>setSrc(img)}/>
         {/* </a> */}
         <img className="imgclas" src={img2} alt="" width="80" onMouseOver={()=>setSrc(img2)}/>
         <img className="imgclas" src={img} alt="" width="80" onMouseOver={()=>setSrc(img)}/>
         <img className="imgclas" src={img2} alt="" width="80" onMouseOver={()=>setSrc(img2)}/>
         <img className="imgclas" src={img} alt="" width="80" onMouseOver={()=>setSrc(img)}/>
     </div>
     <div className="first_2">
         <img src={src} alt="" />
     </div>
 </div>
    </div>
  );
}
