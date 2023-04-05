import '../css/divisi.css'
import cardprogramming from '../img/cardprogramming.jpg'
import cardrobotic from '../img/cardrobotic.jpg'
import cardwebdev from '../img/webdevcard.jpg'
import webdevicon from '../img/programming.png'
import programmingicon from '../img/coding-language.png'
import roboticicon from '../img/ai/png'

const Divisi = () => {
    return(
        <div class="divisi">
            <h3>Divisi</h3>

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
        </div>
    )
}

export default Divisi;