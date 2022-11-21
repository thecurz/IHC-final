import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import img from "./images/login.png";
import { Link } from "react-router-dom";
import "./global.css";
function Login() {
  return (
    <main>
      <Navbar />
      <section className="login">
        <img src={img} alt="" width={"30%"} />
        <div>
          <h1 className="h1login">Iniciar Sesion</h1>
          <h4 className="h4login">Bienvenido de vuelta</h4>
          <h4 className="h4login">Por favor, ingrese sus datos</h4>
          <h3 className="email">Email</h3>
          <input className="login-input" type = "email"></input>
          <h3 className="pwd">Contraseña</h3>
          <input className="login-input" type = "password"></input>
          <h4 className="h4login">Olvide mi Contraseña</h4>
          <button><Link to = "/Welcome">Login</Link></button>
          <div><h4 className="h4login">No tienes cuenta?</h4>
          <h4 className="h4login">Registrate</h4></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Login;
