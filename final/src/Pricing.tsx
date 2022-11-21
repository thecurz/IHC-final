import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import check from "./images/check.png";
import { Link } from "react-router-dom";
import "./global.css";
function Pricing() {
  return (
    <main>
      <Navbar />
      <section>
        <div className="row-a">
          <div>
            <h1>Gratis</h1>
            <div className="feature">
              <img src={check} alt="" />
              <span>Recetas y planes nutricionales</span>
            </div>
            <div className="feature">
              <img src={check} alt="" />
              <span>Registro de progreso nutricional</span>
            </div>
            <button className="buy"><Link to ="/Payment">¡Comienza ya!</Link></button>
          </div>
          <div>
            <h1>S/.15 mensual</h1>
            <div className="feature">
              <img src={check} alt="" />
              <span>Platillos basados en gustos personales</span>
            </div>
            <div className="feature">
              <img src={check} alt="" />
              <span>Platillos basados en gustos personales</span>
            </div>
            <div className="feature">
              <img src={check} alt="" />
              <span>Puntos kineticos como recompenza</span>
            </div>
            <button className="buy"><Link to ="/Payment">¡Comienza ya!</Link></button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Pricing;
