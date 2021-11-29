import React from 'react';
import "../App.css";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <>
            <div className="contactSection">
                <div className="contactLeftSection">
                    <h2>Get in touch</h2>
                    <p> Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>

                    <p>Near Masjid Vazir Haji</p>
                    <p>Fatehpur Shekhawati</p>
                    <p><CallIcon/> +918952992059</p>
                    <p><EmailIcon/> tuglakshahad@gmail.com</p>
                    <p>Looking for carrers?<span>View all job openings.</span> </p>
                </div>

                <div className="contactRightSection">
                <form>
                  
                    <div className="form-outline mb-4">
                        <input type="name" id="form1Example1" className="form-control" placeholder="Full Name" />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="form1Example1" className="form-control" placeholder="Email" />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="phone" id="form1Example1" className="form-control" placeholder="Phone" />
                    </div>

                    <div class="input-group">
                        <textarea class="form-outline form-control" placeholder="Message" aria-label="With textarea"></textarea>
                    </div>

                   

                
            
                    <button type="submit" className="btn btn-large btn-primary ">Create your account</button>
                   <br/>
                    <hr/>
                    <p>By signing up, you agree to out Terms, Data Policy and Cookies Policy</p>
                    </form>
                    
                </div>
            </div>
            
        </>
    )
}

export default Contact
