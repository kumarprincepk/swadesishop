import React from 'react'
import ProductDetail from './ProductDetail'
import ProductDetail2 from './ProductDetail2';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';

export default function ProductDetailFinal() {
  return (
    <>
    <Header/>
        <div style={{display: "grid", gridTemplateColumns: "40% 90%", gap: "10rem"}}>
            <ProductDetail/>
            <ProductDetail2/>
        </div>
    <Footer2/>
    </>
  )
}
