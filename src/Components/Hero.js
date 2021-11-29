import React from 'react';
import "../App.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
    return (
        <>
            <div className="heroSection">
                <div className="leftSection">
                    <h3>Data to enrich your online business</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <h5>TRUSTED BY</h5>
                    <div className="clients">
                        <p>Noble House Decoration</p>
                        <p>A H PowerTools</p>
                        <p>Kanz ul Falah</p>
                    </div>
                </div>

                <div className="rightSection">
                 <form>
                     <p>Sign in with</p>
                     <div className="socialLogo">
                         <FacebookIcon/>
                         <TwitterIcon/>
                         <GitHubIcon/>
                     </div>

                     <div className="divider">
                         <p><span>or</span></p>
                     </div>

                    <div className="form-outline mb-4">
                        <input type="name" id="form1Example1" className="form-control" placeholder="Name" />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="email" id="form1Example1" className="form-control" placeholder="Email" />
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form1Example1" className="form-control" placeholder="Password" />
                    </div>

                 
            
            
                    <button type="submit" className="btn btn-large btn-primary ">Create your account</button>
                    <hr/>
                    <p>By signing up, you agree to out Terms, Data Policy and Cookies Policy</p>
                    </form>

          

                </div>
            </div>
            
        </>
    )
}

export default Hero
