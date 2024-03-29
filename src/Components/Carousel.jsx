import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../assets/carouselImg1.jpg';
import carouselImg2 from '../assets/carouselImg2.jpg';
import carouselImg3 from '../assets/carouselImg3.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import "@fontsource/poppins"; // Defaults to weight 400
import './Components.css';

function CarouselFade() {

  // set scroll to top of page upon landing
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  
  return (
    <>
    {/* image carousel */}
      <Carousel fade>
        <Carousel.Item className='c-item'>
          <img src={carouselImg1} alt='dog in the car' className='carousel-img d-block w-100' text="First slide" />
          <Carousel.Caption>
            <div className="mb-2">
              <p className='carouselWelcome'>Welcome to PAWESOME PETS</p>
              <LinkContainer to="Info">
                {/* button links to breed info page */}
                <Button onClick={scrollToTop} variant="outline-light" size="lg" className="carouselBtn">
                  Get Started
                </Button>
              </LinkContainer>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='c-item'>
          <img src={carouselImg3} alt='dog with stick' className='carousel-img d-block w-100' text="Second slide" />
          <Carousel.Caption>
            <div className="mb-2">
              <p className='carouselP'>Find your fur-ever friend...🐾</p>
              <LinkContainer to="/Info">
                {/* button links to breed info page */}
                <Button variant="outline-light" size="lg" className="carouselBtn">
                  Get Started
                </Button>
              </LinkContainer>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='c-item'>
          <img src={carouselImg2} alt='cat walking along a wall' className='carousel-img d-block w-100' text="Third slide" />
          <Carousel.Caption>
            <div className="mb-2">
            <p className='carouselP'>...and come up with a paw-fect name for them 🐾</p>
              <Link to="Info">
                {/* button links to breed info page */}
                <Button variant="outline-light" size="lg" className="carouselBtn">
                  Get Started
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselFade;