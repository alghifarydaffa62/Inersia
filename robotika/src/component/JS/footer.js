import '../css/footer.css'

const Footer = () => {
    return (
    <div class="footer">
        <div class="row">
            <div class="col">
                <h4>Tentang kami</h4>
                <a href="#">Tentang Inersia</a>
                <a href="#">Divisi Inersia</a>
                <a href="#">Kontak Inersia</a>
            </div>

            <div class="col">
                <h4>Masuk - Sign In</h4>
                <a href="#">Untuk Anggota</a>
                <a href= "#">Untuk Admin</a>
            </div>

            <div class="col">
                <h4>Divisi</h4>
                <p>Web Developer</p>
                <p>Programming</p>
                <p>Robotik</p>
            </div>

            <div class="col">
                <h4>Tentang Developer</h4>
                <p>Web Developer adalah<br></br>divisi yang bergerak di<br></br>
                    pengembangan website.<br></br>Tugas dari Web Developer<br></br>
                    adalah membuat website<br></br>untuk kegiatan organisasi/<br></br>
                    ekskul lain di<rb></rb>sekolah, serta<br></br>untuk mengembangkan 
                    <br></br>website Inersia.</p>
            </div>
        </div>
        
        <div class="copy">
            <p>Copyright &#169;2023 All rights reserved</p>
        </div>
       
    </div>

    ) 
}

export default Footer;