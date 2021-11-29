import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className=" footerSection">
                    <div className="section1">
                        <h3>Solutions</h3>
                        <p>Web Development</p>
                        <p>App Development</p>
                        <p>Digital Marketing</p>
                    </div>

                    <div className="section2">
                        <h3>Support</h3>
                            <p>Pricing</p>
                            <p>Documentations</p>
                            <p>Guides</p>
                        </div>

                    <div className="section3">
                        <h3>Company</h3>
                                <p>About</p>
                                <p>Blog</p>
                                <p>Jobs</p>
                    </div>
                        
                    
                    <div className="section4">
                        <h3>Legal</h3>
                                <p>Claim</p>
                                <p>Privacy</p>
                                <p>Terms</p>
                    </div>
                        
                

                    <div className="section5">
                        <h3>Subscribe to our newsletter</h3>
                        <p>The Latest news, articles and resources send to email weekly</p>
                        <div className="subscribeSection">
                            <input type="email" id="form1Example1" className="form-control" placeholder="Enter your Email" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </div>
                        
                    </div>
                       
             



                </div>


            </div>
            
        </>
    )
}

export default Footer
