import Navbar from '../component/JS/Navbar';
import Divisi from '../component/JS/divisi';
import Jumbotron from '../component/JS/intro';
import Footer from '../component/JS/footer';

const Home = () => {
    return (
        <>
            <style>{'body { background-color: #192841; }'}</style> 
            <Navbar/>
            <Jumbotron/>
            <Divisi/>
            <Footer/>
        </>
    )
}

export default Home