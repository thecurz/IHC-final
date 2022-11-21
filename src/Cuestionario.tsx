import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import "./global.css";
import q1 from "./images/q1.png";
import q2 from "./images/q2.png";
import q3 from "./images/q3.png";

function Cuestionario() {
  return (
    <main>
      <Navbar />
      <section>
        <h1>Queremos saber más sobre ti...</h1>
        <h1>¿Cuál es tu objetivo nutricional?</h1>
        <div className="preguntasq">
          <div>
            <div>
              <button><Link to="/Cuestionario1" >Tonificar</Link> </button>
            </div>
            <img src={q1} alt="" width={"50%"} />
          </div>
          <div>
            <div>
              <button><Link to="/Cuestionario1">Perder peso</Link></button>
            </div>
            <img src={q2} alt="" width={"50%"} />
          </div>
          <div>
            <div>
              <button><Link to="/Cuestionario1">Adquirir masa muscular</Link></button>
            </div>

            <img src={q3} alt="" width={"50%"} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Cuestionario;
