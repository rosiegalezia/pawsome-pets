// import './App.css'
import Home from './Pages/Home';
import GenerateName from './Pages/GenerateName'
import About from './Pages/About'
import Info from './Pages/Info';
import NavBar from "./Components/NavBar";
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import CarouselFade from './Components/Carousel';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Info" element={<Info/>} />
            <Route path="/GenerateName" element={<GenerateName />} />
            <Route path="/About" element={<About />} />
        </Routes>
        <Footer/>
    </Router>;
}

export default App
