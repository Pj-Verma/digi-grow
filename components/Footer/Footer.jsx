import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <hr />
        
        <div className="footer" id="About">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Grow aim towards  the promotion of your brand to connect with potential customers using the internet and other forms of digital communication.
                    </div>
                </div>
                <div className="col">
             <div className="title">Contact</div>
             <div className="c-item">
                <div className="text">
                    Gautam Buddha Nagar ,Noida 201301
                </div>
             </div>
             <div className="c-item">
                <div className="text">
                   Phone: 7091456771</div>
             </div>
             <div className="c-item">
                <div className="text">
                    Email: grow@gmail.com</div>
             </div>
             </div>
               
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Grow 2023 CREATED BY Pankaj
                    </span>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;