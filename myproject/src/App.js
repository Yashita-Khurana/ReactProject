import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

import BootstrapCarousel from './components/BootstrapCarousel'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <BootstrapCarousel/>
    </div>
  );
}

export default App;