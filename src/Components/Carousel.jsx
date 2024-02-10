import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../assets/carouselImg1.jpg';
import carouselImg2 from '../assets/carouselImg2.jpg';
import carouselImg3 from '../assets/carouselImg3.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import "@fontsource/poppins"; // Defaults to weight 400
// import './NavBar.css';
import './Components.css';

function CarouselFade() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item className='c-item'>
        <img src={carouselImg1} alt='dog in the car' className='carousel-img d-block w-100' text="First slide"/>
        <Carousel.Caption>
        <div className="mb-2">
          <Link to="Info">
            <Button variant="outline-light" size="lg" className="carouselBtn">
              Get Started
            </Button>
          </Link>
        </div>
        <p className='carouselWelcome'>Welcome to PAWESOME PETS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img src={carouselImg3} alt='dog with stick' className='carousel-img d-block w-100' text="Second slide"/>
        <Carousel.Caption>
        <div className="mb-2">
          <Link to="Info">
            <Button variant="outline-light" size="lg" className="carouselBtn">
              Get Started
            </Button>
          </Link>
        </div>
        <p className='carouselP'>Find your fur-ever friend and come up with a paw-fect name for them 🐾</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img src={carouselImg2} alt='cat walk' className='carousel-img d-block w-100' text="Third slide" />
        <Carousel.Caption>
        <div className="mb-2">
          <Link to="Info">
            <Button variant="outline-light" size="lg" className="carouselBtn">
              Get Started
            </Button>
          </Link>
        </div>
          <p className='carouselP'>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}

export default CarouselFade;