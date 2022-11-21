import "../global.css";
import img from "../images/hero-img.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div>
        <div>
          <h1 className="header-hero">Comenzar una dieta nunca fue tan divertido...</h1>
          <h2 className="header2-hero">Comienza una nueva y mejor etapa en tu vida con nosotros.</h2>
          <button className="button-hero"><Link to = "/Start">¡Comienza tu plan ya!</Link></button>
        </div>
        <div>
          <img src={img} alt=""/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
