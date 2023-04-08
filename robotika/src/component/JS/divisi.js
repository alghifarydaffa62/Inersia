import '../css/divisi.css'
import cardprogramming from '../img/cardprogramming.jpg'
import cardrobotic from '../img/cardrobotic.jpg'
import cardwebdev from '../img/webdevcard.jpg'
import webdevicon from '../img/programming.png'
import programmingicon from '../img/coding-language.png'
import roboticicon from '../img/ai.png'
import Button from './button'

const Divisi = () => {
    return (
        <div class="divisi">
            <h2>Divisi</h2>

            <div class="rowdiv">
                <div class="div1">
                    <img src={webdevicon}></img>
                    <p>Web developer</p>
                </div>
                <div class="div2">
                    <img src={programmingicon}></img>
                    <p>Programming</p>
                </div>
                <div class="div3">
                    <img src={roboticicon}></img>
                    <p>Robotic</p>
                </div>
            </div>

            <div class="card">
                <div class="web">
                    <img src={cardwebdev}></img>
                    <h4>Web Developer</h4>
                    <p>Sebuah divisi yang megkhususkan<br></br>dalam programming 
                    dan<br></br>mengembangkan website</p>
                </div>

                <div class="programming">
                    <img src={cardprogramming}></img>
                    <h4>Programming</h4>
                    <p>Sebuah divisi yang mengkhususkan<br></br>dalam programming secara general 
                    <br></br>dan luas</p>
                </div>

                <div class="robotic">
                    <img src={cardrobotic}></img>
                    <h4>Robotic</h4>
                    <p>Sebuah divisi yang mengkhususkan<br></br>dalam mengembangkan 
                    dan<br></br>membuat robot</p>
                </div>
            </div>

            <Button/>
            
            <div class="slogan">
                <h1>Na Prochosei Stin Technologia</h1>
                <p>Maju Dalam Teknologi</p>
            </div>
            
        </div>
    )
}

export default Divisi;