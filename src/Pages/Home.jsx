// import '../App.css';
import NavBar from '../Components/NavBar';
import { Carousel } from 'bootstrap';
import '../Components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import CarouselFade from '../Components/Carousel';
import PawPrints from '../assets/paw-prints.svg'

function Home() {
  return (
    <div className='page-container'>
      <div className='page-content'>
      <CarouselFade />
      </div>
    </div>
  )
}

export default Home;