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
        {/* <div className="social d-flex justify-content-center" id="contact-icon">
            <a className="mx-3" href="https://github.com/Salala1005" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          </div> */}
      </div>
    </div>
  )
}

export default Home;