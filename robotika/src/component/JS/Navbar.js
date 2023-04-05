import '../css/Navbar.css'
import logo from '../img/logo.jpg'

const Navbar = () => {
    return (
        <div class = "Navbar">
            <div class="logo">
                <img src = {logo}></img>
                <p>Inersia</p>
            </div>
            
            <ul>
                <li><a href="">Beranda</a></li>
                <li><a href="">Tentang</a></li>
                <li><a href="">Projek</a></li>
                <li><a href="">Daftar</a></li>
                <li><a href="">Masuk</a></li>
            </ul>
        </div>
    )
}

export default Navbar;