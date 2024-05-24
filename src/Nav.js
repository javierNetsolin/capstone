import { Link } from "react-router-dom"
import Hamburguer from "./assets/HmburguerMenu.svg"
export default function Nav(){
    return(
   <nav className="main-nav">
      <ul className="text-menu">
            <li>
            <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/" className="nav-item">About</Link>
              </li>
            <li>
              <Link to="/" className="nav-item">Menu</Link>
            </li>
            <li>
              <Link to="/reservations" className="nav-item">Reservations</Link>
            </li>
            <li>
              <Link to="/" className="nav-item">Order Online</Link>
              </li>
            <li>
              <Link to="/" className="nav-item">Login</Link>
              </li>
        </ul>
      <img className="hamburger-nav" src={Hamburguer} alt="Hamburguer menu icon"/>

    </nav>
    )
}