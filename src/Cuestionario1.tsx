import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import "./global.css";
function Cuestionario1() {
  return (
    <main>
      <Navbar />
      <section>
        <h1>Queremos saber más sobre ti...</h1>
        <h1>Ingrese sus medidas...</h1>
        <div className="row">
          <div>
            <div>¿Cuánto mides?</div>
            <input type="text" />
          </div>
          <div>
            <div>¿Cuánto pesas?</div>
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div>
            <div>¿Cuánto dias a la semana te ejercitas?</div>
            <input type="text" />
          </div>
          <div>
            <div>¿Cuánto horas al día te ejercitas?</div>
            <input type="text" />
          </div>
        </div>
        <button style = {{"marginLeft": "80%"}}><Link to ="/Cuestionario2">Siguiente</Link></button>
      </section>
      <Footer />
    </main>
  );
}

export default Cuestionario1;
