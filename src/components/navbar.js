import { Link } from 'react-router-dom';

import './Navbar.css';
import Logo from './Grids/BK-novo-logo.svg'
function Navbar() {


    return (
       <div className="container-fluid navbar-container" style={{ height: '130px', backgroundColor: '#F5EBDC'}}>

      
        <div className="row navbar-row">
           <ul className="nav navbar-ul justify-content-center">
           <img src={Logo} className="navbar-logo" alt="Logo do BK"></img>
            <li className="nav-item navbar-li">
            <Link className="nav-link navbar-link" aria-current="page" to="/">Inicio</Link>
            </li>

            <li className="nav-item navbar-li">
                <Link className="nav-link navbar-link" to="/cupons">Cupons</Link>
            </li>

            
            <li className="nav-item navbar-li">
                <Link className="nav-link navbar-link" to="/cardapio">Cardápio</Link>
            </li>

            
            <li className="nav-item navbar-li">
                <Link className="nav-link navbar-link">App BK</Link>
            </li>

            <li className="nav-item navbar-li">
                <Link className="nav-link navbar-link">Clube BK</Link>
            </li>

            <li className="nav-item navbar-li">
                <Link className="nav-link navbar-link">Delivery</Link>
            </li>
           </ul>
        

        </div>



       </div>

    )
}
export default Navbar;