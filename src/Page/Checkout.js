import React from 'react'
import '../style/EditOrder.css';
import EditOrder2 from './EditOrder2';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Checkout1 from './Checkout1';

export default function Checkout() {
  return (
    
    <>
        <Header/>
            <div className="full">
                <Checkout1/>
                <div className="div2">
                <EditOrder2/>
                </div>
            </div>
            <Footer/>
    </>
  )
}
