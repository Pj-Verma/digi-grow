import React from 'react'
import banner from "../../assets/internet-g6a6f757d9_1920.jpg"
import '../Header/Hero.css';
const Hero = () => {
  return (
    <>
     <header style={{ paddingLeft: 0 }} id='Hero'>
      <div className='p-5 text-center bg-image'>
        <div className='mask' >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h2 className='mb-3'>Digital Marketing Agency </h2>
              
              <h4 className='mb-3'>Want to drive traffic, generate leads, and attract new customers ? <br/>You are at the right place.</h4>
              <a className='btn btn-outline-light btn-lg' href='#Services' role='button'>
                Our services
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

      
    </>
  );
  
}

export default Hero





