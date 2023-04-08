import '../css/Navbar.css'
import logo from '../img/logo.jpg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const Navigate = useNavigate()

    return (
        <div class = "Navbar">
            <div class="logo">
                <img src = {logo}></img>
                <p>Inersia</p>
            </div>
            
            <ul>
                <li><a onClick={() => Navigate('/Home')}>Beranda</a></li>
                <li><a onClick={() => Navigate('/About')}>Tentang</a></li>
                <li><a href="">Projek</a></li>
                <li><a href="">Daftar</a></li>
                <li><a href="">Masuk</a></li>
            </ul>
        </div>
    )
}

export default Navbar;