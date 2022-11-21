import "../global.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <div className="links">
          <img src={logo} alt="" />
          <div className="title">Plus Nutrition</div>
          <div>
            <Link to="/">Inicio</Link>
          </div>
          <div>
            <Link to="/Testimonios">Testimonios</Link>
          </div>
          <div>
            <Link to="/About">Acerca de nosotros</Link>
          </div>
        </div>
        <div>
          <div>
            <button>
              <Link to="/Login">Iniciar Sesion</Link>
            </button>
            <button>
              <Link to="/Start">Registrarse</Link>
            </button>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
