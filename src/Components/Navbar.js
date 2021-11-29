import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import Contact from './Contact';

import Home from './Home';
import Pricing from './Pricing';
import Testimonial from './Testimonial';

const Navbar = () => {
    return (
        <>  
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link className="navbar-brand" to="/">
                    <h2>Tuglak Developers</h2>

                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" element={<Home/>}>
                            Home
                        </Link>
                    </li>
                    
                    <li className="nav-item ">
                        <Link to="/pricing" className="nav-link" element={<Pricing/>}>
                            Pricing
                        </Link>
                    </li>

                    <li className="nav-item ">
                        <Link to="/testimonial" className="nav-link" element={<Testimonial/>}>
                            Testimonials
                        </Link>
                    </li>


                    <li className="nav-item ">
                        <Link to="/contact" className="nav-link" element={<Contact/>}>
                            Contact
                        </Link>
                    </li>

     
                </ul>

            </div>
        </nav>
            

            
        </>
    )
}

export default Navbar
