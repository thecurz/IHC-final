import "../global.css";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import twt from "../images/twt.png";
import ln from "../images/ln.png";
import { Link } from "react-router-dom";

function FooterSection({
  title,
  text,
  links,
}: {
  title: string;
  text: string[];
  links: string[];
}) {
  const texts: React.ReactElement[] = [];
  for (var i = 0; i < text.length; i++) {
    const link = links[i];
    texts.push(
      <div className="footer-text" key={i * 2}>
        <Link to={link} className="footer-text" >
          {text[i]} 
        </Link>
      </div>
    );
  }
  return (
    <div className="footer-section">
      <div className="footer-title">{title}</div>
      {texts}
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer-sections">
        <FooterSection
          title={"Cuenta"}
          text={["Iniciar Sesion", "Registrar", "Pagina Web"]}
          links={["/Login", "/Start", "/"]}
        />
        <FooterSection
          title={"Nosotros"}
          text={["Blog", "Automotivacion", "Preguntas Frecuentes"]}
          links={["/", "/", "/"]}
        />
        <FooterSection
          title={"Programa tu plan"}
          text={["Asesorias", "Plan Fit", "Plan Detox", "Plan Premium"]}
          links={["/", "/", "/"]}
        />
      </div>
      <div>
        <div className="footer-title">FOLLOW Health Care & Diets</div>
        <div className="social">
          <img src={fb} alt=""></img>
          <img src={ig} alt=""></img>
          <img src={twt} alt=""></img>
          <img src={ln} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
