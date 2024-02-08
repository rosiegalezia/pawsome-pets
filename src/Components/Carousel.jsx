import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../assets/carouselImg1.jpg';
import carouselImg2 from '../assets/carouselImg2.jpg';
import carouselImg3 from '../assets/carouselImg3.jpg';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

function CarouselFade() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item className='c-item'>
        <img src={carouselImg2} alt='doggy with tongue out' className='carousel-img d-block w-100' text="First slide" fluid/>
        <Carousel.Caption>
        <div className="mb-2">
        <Button variant="light" size="lg" className="carouselBtn">
          Get Started
        </Button></div>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img src={carouselImg1} alt='dog friends' className='carousel-img d-block w-100' text="Second slide"fluid />
        <Carousel.Caption>
        <div className="mb-2">
        <Button variant="light" size="lg" className="carouselBtn">
          Get Started
        </Button></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img src={carouselImg3} alt='dog friends' className='carousel-img d-block w-100' text="Third slide"fluid />
        <Carousel.Caption>
        <div className="mb-2">
        <Button variant="light" size="lg" className="carouselBtn">
          Get Started
        </Button></div>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}

export default CarouselFade;