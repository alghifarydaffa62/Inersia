import './App.css';
import Navbar from './component/JS/Navbar';
import Jumbotron from './component/JS/intro'

function App() {
  return (
    <div className="App" >
      <style>{'body { background-color: #192841; }'}</style>
      <Navbar/>
      <Jumbotron/>
    </div>
  );
}

export default App;
