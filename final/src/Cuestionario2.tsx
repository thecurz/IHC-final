import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import "./global.css";
function Cuestionario2() {
  return (
    <main>
      <Navbar />
      <section className="question-section">
        <h1>Queremos saber más sobre ti...</h1>
        <h1>Completa tu perfil</h1>
        <div className="row">
          <div>
            <div>Nombres</div>
            <input type="text" />
          </div>
          <div>
            <div>Apellidos</div>
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div>
            <div>Fecha de nacimiento</div>
            <input type="text" />
          </div>
          <div>
            <div>¿En donde vives?</div>
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div>
            <div>Celular</div>
            <input type="text" />
          </div>
        </div>
        <button style={{ marginLeft: "80%" }}><Link to="/Welcome">Siguiente</Link></button>
      </section>
      <Footer />
    </main>
  );
}

export default Cuestionario2;
