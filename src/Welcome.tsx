import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import "./global.css";

function Welcome() {
  return (
    <main>
      <Navbar />
      <section className="welcome">
        <h1>Bienvenido</h1>
        <h2>¿Qué actividad deseas realizar? </h2>
        <div className="column">
          <button><Link to="/Cuestionario">Contacta a profesionales</Link> </button>
          <button><Link to="/Cuestionario">Dietas recomendadas</Link></button>
          <button><Link to="/Cuestionario">Cambiar de Objetivo</Link></button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Welcome;
