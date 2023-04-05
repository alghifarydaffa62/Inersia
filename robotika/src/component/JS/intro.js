import '../css/jumbotron.css'
import Asset1 from '../img/Asset 1.png'

const Jumbotron = () => {
    return (
        <div class="intro">
            <h1>Informatics And Electronics of Smanisda</h1>
            <p>Informatics And Electronics of Smanisda atau biasa disebut 
                Inersia</p>
            <img src = {Asset1}></img>

            <div class="about">
                <h3>Informatics And Electronics of Smanisda</h3>
                <p>Informatics And Electronic Of Smanisda atau 
                    yang biasa dikenal sebagai INERSIA adalah<br></br>salah satu 
                    ekstrakurikuler di SMA Negeri 1 Sidoarjo yang bergerak di 
                    bidang teknologi<br></br>dan informatika. INERSIA memiliki tiga 
                    divisi yaitu Robotics, Programming, dan Web<br></br>Developer 
                    yang mana kalian bisa memilih salah satu diantaranya.</p>
            </div>
            <a href="" class="button">Daftar</a>
        </div>
    )
}

export default Jumbotron;