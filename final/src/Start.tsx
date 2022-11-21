import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import img from "./images/start.png";
import "./global.css";
function Start() {
  return (
    <main>
      <Navbar />
      <section className="login">
        <img src={img} alt="" width={"30%"} />
        <div>
          <h1 className="h1login">Registrarse</h1>
          <h3 className="email">Email</h3>
          <input className = "login-input"type="email"></input>
          <h3 className="pwd">Contraseña</h3>
          <input className = "login-input"type="password"></input>
          <h3 className="pwd">Confirmar Contraseña</h3>
          <input className = "login-input" type="password"></input>
          <div></div>
          <button className="register"><Link to = "/Pricing">Registrarse</Link></button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Start;
