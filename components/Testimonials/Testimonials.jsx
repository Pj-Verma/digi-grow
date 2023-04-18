import Carousel from 'react-bootstrap/Carousel';
import "../Testimonials/Testimonials.css"
import img from "../../assets/testimonials.jpg"
import Container from 'react-bootstrap/Container';
function Testimonials() {
  return (
    
    <section id='Testimonials' className='testimonials-block' >
     {/* <div className="container">
         <div className="Heading">
         <h1 className="text">Our services</h1>
       </div>
         </div> */}
    <Container fluid>
        <div className="title-holder">
            <h2>Client testimonials</h2>
            <div className="subtitle">
                -what client says about us-
            </div>
            </div>
            <Carousel controls={false}>
      <Carousel.Item interval={1000}>
       <blockquote>
        <p>"Grow is a much needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.”</p>
        <cite>
            <span className="name">-Marci Wiersma</span><br />
            <span className="designation">Manager</span>
        </cite>
       </blockquote>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
       <blockquote>
        <p>“Working with the Grow team has been a most pleasant experience! Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long lasting and prosperous relationship!”</p>
        <cite>
            <span className="name">-Chad Montgomery</span><br />
            <span className="designation">Accountant</span>
        </cite>
       </blockquote>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
       <blockquote>
        <p>“These guys are incredible. They've helped us to grow our business and now the biggest problem we seem to come across is having too much business - which is the ideal problem to have. We are right where we wanted to be and Grow made that possible. Thanks guys!”</p>
        <cite>
            <span className="name">-Whitney Wells Lewis</span><br />
            <span className="designation">CEO</span>
        </cite>
       </blockquote>
      </Carousel.Item>
      
    </Carousel>
    </Container>

    </section>
   
  );
}

export default Testimonials;