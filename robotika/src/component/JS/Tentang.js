import '../css/about.css'
import AlwaysOpenExample from './accordion'

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
            
            <div class="Row" >
                {/* <div class="accordion">
                    <AlwaysOpenExample/>
                </div> */}
                
            </div>
            
        </div>
    )
}

export default Tentang