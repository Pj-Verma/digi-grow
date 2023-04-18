import React from 'react'
import  '../Header/Header.css';
import logo from "../../assets/grow-high-resolution-color-logo (2).png"
import logo1 from "../../assets/grow-low-resolution-logo-black-on-transparent-background.png"
import { useEffect,useState,useContext } from 'react';

// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [scrolled,setScrolled]=useState(false);
  // const navigate=useNavigate();
  const handlescroll=()=>{
    const offset=window.scrollY;
    if(offset>200){
      setScrolled(true);
    }
    else
    setScrolled(false);
  };
    useEffect(() => {
      window.addEventListener("scroll",handlescroll)
    
       
    }, [])
  return (<>    
  <div className="header-content">
    <div className="left">
    {/* <Link to="/"> */}
    {/* </Link> */}

      {/* <img src={logo} width={90} height={70} alt="logo"  onClick={()=>navigate('/')}/> */}
      <img src={logo1} width={90} height={30} alt="logo" />
    </div>
    <div className="right">
    <a href="#About">Contact Now</a>
    </div>
    </div>
    
</>

  )
}

export default Header