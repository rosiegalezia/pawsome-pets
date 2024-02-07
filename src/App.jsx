<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======

// import './App.css'
import Home from './Pages/Home';
import GenerateName from './Pages/GenerateName'
import About from './Pages/About'
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
            {/* <Route path="/Info" element={<Info/>} /> */}
            <Route path="/GenerateName" element={<GenerateName />} />
            <Route path="/About" element={<About />} />
        </Routes>
        <Footer/>
    </Router>;
}

export default App
>>>>>>> fc9f5127cbcba2555418ddde47bd6ee02a2317a6
