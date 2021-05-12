import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Car from "./components/Car"
import BootstrapCarousel from './components/BootstrapCarousel'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    
    <Car/>
    </div>
  );
}

export default App;