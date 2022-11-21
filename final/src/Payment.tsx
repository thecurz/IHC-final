import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import check from "./images/checkp.png";
import visa from "./images/visa.png";
import mc from "./images/mc.png";
import pp from "./images/pp.png";
import "./global.css";
function Payment() {
  return (
    <main>
      <Navbar />
      <section className="question-section">
        <h1>Métodos de pago</h1>
        <h2>¿Cómo desea realizar el pago?</h2>
        <div className="row">
          <div className="method">
            <img src={check} alt="" width={"10%"} />
            <img src={visa} alt="" width={"50%"} />
          </div>
          <div className="method">
            <img src={check} alt="" width={"10%"} />
            <img src={mc} alt="" width={"50%"} />
          </div>
          <div className="method">
            <img src={check} alt="" width={"10%"} />
            <img src={pp} alt="" width={"50%"} />
          </div>
        </div>
        <h2>Complete su información personal</h2>
        <div className="rowb">
          <input type="text" placeholder="Nombres" />
          <input type="text" placeholder="Apellidos" />
        </div>
        <div className="rowb">
          <input type="text" placeholder="E-mail" />
        </div>
        <div className="rowb">
          <input type="text" placeholder="Numero de tarjeta" />
        </div>
        <div className="rowb">
          <input type="text" placeholder="Fecha de vencimiento"/>
          <input type="text" placeholder="CVC"/>
        </div>
        <button className="confirm">Confirmar Pago</button>
      </section>
      <Footer />
    </main>
  );
}

export default Payment;
