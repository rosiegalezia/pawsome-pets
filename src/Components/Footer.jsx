import './Components.css'
import Logo from '../assets/logo-two-lines.svg'

function Footer() {
    return (
        <div className='footer p-4 w-100 bg-light'>
            <img src={Logo} alt="" className='footer-logo p-3 img-fluid' />

            <p className='text-center'>Copyright © 2024 Rosie Galezia, Emma Davies, Mijeong Jin, Liam Cottrell</p>
            {/* <p className='text-center'>You can view the GitHub repository for this project <a href='https://github.com/rosiegalezia/pawsome-pets'>here</a></p> */}
        </div>
    )
}

export default Footer