import { Link } from 'react-router-dom';
import React from 'react';
import "../App.css";
import Home from "./Home";
const Pricing = () => {
    return (
        <>
            <div className="pricing">
                <div className="pricingContent">
                    <h2>Everything you need for <span> $99 a month </span></h2>
                    <p>Includes every feature we offer plus unlimited projects and unlimited users</p>
                </div>
                <div className="pricingButton">
                    <Link to="/" className="btn" element={<Home/>}>
                        Get Started Today
                    </Link>
                </div>
            </div>
            
            
        </>
    )
}

export default Pricing
