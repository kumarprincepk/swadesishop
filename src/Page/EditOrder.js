import React from 'react'
import EditOrder1 from './EditOrder1'
import EditOrder2 from './EditOrder2'
import '../style/EditOrder.css';
import Footer from '../components/Footer'
import Header from '../components/Header';

export default function EditOrder() {
  return (
    <>
    <Header/>
            <div className="full">
                <EditOrder1/>
                <div className="div2">
                <EditOrder2/>
                </div>
            </div>
            <Footer/>
    </>
  )
}
