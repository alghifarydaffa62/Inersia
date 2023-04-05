import './App.css';
import Navbar from './component/JS/Navbar';
import Divisi from './component/JS/divisi';
import Jumbotron from './component/JS/intro'

function App() {
  return (
    <div className="App" >
      <style>{'body { background-color: #192841; }'}</style>
      <Navbar/>
      <Jumbotron/>
      <Divisi/>
    </div>
  );
}

export default App;
