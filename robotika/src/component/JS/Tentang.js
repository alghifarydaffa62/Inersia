import '../css/about.css'
import BasicExample from './accordion'
import pelatih from '../img/pelatih.png'
import webdev from '../img/webdevcard.jpg'
import coding from '../img/cardprogramming.jpg'
import Robotic from '../img/cardrobotic.jpg'

const Tentang = () => {
    return (
        <div class="About">
            <h2>Tentang Inersia</h2>
            <p>Informatics And Electronics of Smanisda atau yang biasa dikenal sebagai 
                Inersia adalah salah satu ekstrakurikuler<br></br>di SMA Negeri 
                1 Sidoarjo yang bergerak di bidang teknologi dan informatika. 
                Selain bidang robotika, Inersia juga<br></br>berupaya menekuni bidang 
                pemrograman sehingga para anggota dapat mengembangkan program<br></br>
                seperti startup, website, dan aplikasi sederhana yang dapat 
                berguna bagi lingkungan masyarakat.</p>
            
            
            <div class="pelatih">
                <h2>Pelatih Inersia</h2>

                <div class="name">
                    <img src={pelatih}></img>
                    <div class="word">
                        <h2>Daffa Kurnia Fatah</h2>
                        <p>Hello! My name is Daffa Kurnia Fatah 
                            and also called Daffa. I started learning 
                            web<br></br>development in April 2020, which is the 
                            start of a pandemic Covid-19. I decided to<br></br>learn 
                            web development from my course named Computer 
                            Programming where I<br></br>made my first website for 
                            my final project. I started learning from Youtube 
                            Channel<br></br>to explore more about web development.</p>
                    </div>
                </div>
                
            </div>
            
            <div class="proker">
                <h2>Program Kerja</h2>
                <p>Program kerja Inersia 2023, yaitu pemprograman, 
                    perakitan robot, dan pengadaan perlengkapan Arduino.<br></br> 
                    Tujuan pemprograman, yaitu agar anggota kami dapat belajar
                    mengenai pemrograman dan<br></br>mempraktikkannya dengan cara 
                    membuat sebuah aplikasi sederhana ataupun dengan cara 
                    membuat sebuah<br></br>website. Tujuan pengadaan perlengkapan 
                    Arduino, yaitu agar anggota kami dapat belajar mengenai
                    Arduino<br></br>dan dapat mengaplikasikannya kepada robot-robot 
                    yang akan dibuat kedepannya. Tujuan perakitan robot,<br></br>
                    yaitu agar anggota kami dapat belajar mengenai bagaimana 
                    cara merakit atau membuat sebuah robot, serta<br></br>fungsi dari 
                    masing-masing komponen-komponennya.
                    </p>  
                
                {/* <div class="divimg">
                    <div class="webdev">
                        <h5>Web Developer</h5>
                    </div>
                    <div class="coding">
                        <h5>programming</h5>
                    </div>
                    <div class="Robotic">
                        <h5>robotic</h5>
                    </div>
                </div> */}
            </div>
            
        </div>
    )
}

export default Tentang