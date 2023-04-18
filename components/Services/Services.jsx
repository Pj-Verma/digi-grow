import React from 'react'
import '../Services/Services.css';
import img1 from "../../assets/SEO.png";
import  img2 from "../../assets/Content.png";
import  img3 from "../../assets/website.png";

import anime from "animejs";
import { useEffect } from "react";
const Services = () => {
  
    
      let cardAnimation = () => {
        anime({
          targets: ".Card_container",
          translateX: [-2000, 0],
          direction: "normal",
          easing: "linear",
          delay: 500,
          opacity: [0, 1]
        });
      };
    
      useEffect(() => {
        cardAnimation();
      });
  return (
    <>
    <hr />
    
    <div className="Heading" >
    <h1 id='Services' className="text">Our services</h1>
  </div>
    <div className="Card_container">
        <div className="box" >
          <img src={img1} alt="" />
          <h3>SEO Optimization</h3>
          <p>Our SEO team will make sure the site is technically sound , optimized for mobile search, host a high quality content and easy for customers to buy.
We optimize the technical configuration, content relevance and link popularity so the pages can become easily findable and popular towards user's search queries so that search engines rank them better.</p>
          <a
            href="#"
            className="btn"
          >
            Read more
          </a>
        </div>
        <div className="box" >
          <img src={img2} alt="" />
          <h3>Content building</h3>
          <p>We at regular intervals revisit the content strategy plan and make sure it's up-to-date, innovative, and engaging for your prospects and customers.
A good content helps in influencing the customers to buy the product of your company and consequently leads to increase in your sales.
</p>
          <a
            href="#"
            className="btn"
          >
            Read more
          </a>
        </div>
        <div className="box" >
          <img src={img3} alt="" />
          <h3>Website designing</h3>
          <p>We aim towards not only in setting up the virtual storefronts of your business, but also in terms of marketing their enterprises to expand their reach.
We fully understand that a company's website design is its first impression. As a result, over the last few years, we've gathered a talented team of UI designers to assist you in developing your brand.</p>
          <a
            href="#"
            className="btn"
          >
            Read more
          </a>
        </div>
    </div>
    </>
      );
    }
   
export default Services