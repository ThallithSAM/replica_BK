import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
//Impotando o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Grids/home';
import Cupons from './components/Grids/cupons';
import Cardapio from './components/Grids/cardapio';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/cupons" element={<Cupons />}/>
      <Route path="/cardapio" element={<Cardapio />}/>
     </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
