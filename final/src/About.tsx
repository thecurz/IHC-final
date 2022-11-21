import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import fb from "./images/fb.png";
import ig from "./images/ig.png";
import twt from "./images/twt.png";
import ln from "./images/ln.png";
import per1 from "./images/per1.png";
import per2 from "./images/per2.png";
import per3 from "./images/per3.png";
import per4 from "./images/per4.png";
import "./global.css";
import upc from "./images/upc.png";

function About() {
  return (
    <main>
      <Navbar />
      <section className="h1-nm">
        <div className="row h1-nm">
          <div>
            <h1 className="header-hero">Sobe Nosotros</h1>
            <h2>
              Healthy Care & Diets está conformado por cuatro jóvenes de la
              Universidad Peruana de Ciencias Aplicadas que pertenecen a la
              carrera de Ciencias de la Computación{" "}
            </h2>
          </div>
          <img src={upc} alt="" />
        </div>
        <hr />
        <h1 className="header-hero"> Nuestro Grupo</h1>
        <div className="row">
          <div className="person">
            <img src = {per1} width = "70%"alt="" />
            <div className="social">
              <img src={fb} alt=""></img>
              <img src={ig} alt=""></img>
              <img src={twt} alt=""></img>
              <img src={ln} alt=""></img>
            </div>
            <div>Diego Atarama</div>
          </div>
          <div className="person">
            <img src = {per2} width = "70%"alt="" />
            <div className="social">
              <img src={fb} alt=""></img>
              <img src={ig} alt=""></img>
              <img src={twt} alt=""></img>
              <img src={ln} alt=""></img>
            </div>
            <div>Carlos Castilla</div>
          </div>
        </div>
        <div className="row">
          <div className="person">
            <img src = {per3} width = "70%"alt="" />
            <div className="social">
              <img src={fb} alt=""></img>
              <img src={ig} alt=""></img>
              <img src={twt} alt=""></img>
              <img src={ln} alt=""></img>
            </div>
            <div>Loana Rodriguez</div>
          </div>
          <div className="person">
            <img src = {per4} width = "70%"alt="" />
            <div className="social">
              <img src={fb} alt=""></img>
              <img src={ig} alt=""></img>
              <img src={twt} alt=""></img>
              <img src={ln} alt=""></img>
            </div>
            <div>Kevin Tumbalobos</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default About;
