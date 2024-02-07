// import '../App.css';
import NavBar from '../Components/NavBar';
import { Carousel } from 'bootstrap';
import '../Components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import CarouselFade from '../Components/Carousel';

function Home() {
  return (
    <div className='page-container'>
      <div className='page-content'>
      <CarouselFade />
      <h2 className='p-3 m-3 text-center'>Welcome to Pawsome Pets</h2>
      <h4 className='text-center'>Find your fur-ever friend and come up with a paw-fect name for them 🐾</h4>
      </div>
    </div>
  )
}

export default Home;