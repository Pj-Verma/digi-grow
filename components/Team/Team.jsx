import React from 'react'
import '../Team/Team.css';
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/Digital Content Manager.jpg";
import team3 from "../../assets/Design & Creative Manager.jpg";
const Team = () => {
  return (
    <section className='section-white' id='Team'>
        <div className="container">
            <div className="row">
                <div className='col-md-12 text-center'>
                    <h2 className="section-title">
                        Our team members
                    </h2>
                    <p className="section-subtitle">
                    Our Digital Marketing Expertise
                    </p>
                </div>
                <div className='col-sm-6 col-md-4'> 
                <div className="team-item">
                    <img className='team-img' src={team1} alt="" />
                    <h3>Chad Montgomery</h3>
                    <div className="team-info">
                        <p>Head of SEO</p>
                        <p>Improve the visibility , search traffic of a website </p>
                        <ul className="team-icon">
                            <li><a href="#" className='twitter'>
                                <i className='fab fa-twitter'></i>
                            </a></li>
                            <li><a href="#" className='pinterest'>
                                <i className='fab fa-pinterest'></i>
                            </a></li>
                            <li><a href="#" className='facebook'>
                                <i className='fab fa-facebook'></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='col-sm-6 col-md-4'> 
                <div className="team-item">
                    <img className='team-img' src={team2} alt="" />
                    <h3>ALLY WILSON</h3>
                    <div className="team-info">
                        <p>Content Manage</p>
                        <p> Creating content, managing online communities.</p>
                        <ul className="team-icon">
                            <li><a href="#" className='twitter'>
                                <i className='fab fa-twitter'></i>
                            </a></li>
                            <li><a href="#" className='pinterest'>
                                <i className='fab fa-pinterest'></i>
                            </a></li>
                            <li><a href="#" className='facebook'>
                                <i className='fab fa-facebook'></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='col-sm-6 col-md-4'> 
                <div className="team-item">
                    <img className='team-img' src={team3} alt="" />
                    <h3>Larissa Drazic</h3>
                    <div className="team-info">
                        <p>Design & Creative Manager</p>
                        <p>Photographer, videographer and graphic designer</p>
                        <ul className="team-icon">
                            <li><a href="#" className='twitter'>
                                <i className='fab fa-twitter'></i>
                            </a></li>
                            <li><a href="#" className='pinterest'>
                                <i className='fab fa-pinterest'></i>
                            </a></li>
                            <li><a href="#" className='facebook'>
                                <i className='fab fa-facebook'></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team