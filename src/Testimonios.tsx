import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import tes1 from "./images/tes1.png";
import tes2 from "./images/tes2.png";
import tes3 from "./images/tes3.png";
import "./global.css";
function Testimonio({ img, name, email, text }: any) {
  return (
    <div className="testimonio">
      <img src={img} alt="" />
      <div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

function Testimonios() {
  const tes: string[] = [tes1, tes2, tes3];
  const name: string[] = [
    "Cristian Mendoza",
    "Sofia Fernandez",
    "Kristina Reyes",
  ];
  const email: string[] = [
    "Medozita@gmail.com",
    "SFer@gmail.com",
    "Kreyes@gmail.com",
  ];
  const text: string[] = [
    "Bajar de peso siempre fue un obstaculo para mí, pero con PlusNutrition finalmente logré mi cometido",
    "Bajar de peso nunca fue tan facil",
    "Comiendo lo que quiero llegue a mi peso ideal",
  ];
  const testimonios: React.ReactElement[] = [];
  for (var i = 0; i < 3; i++) {
    testimonios.push(
      <Testimonio
        img={tes[i]}
        name={name[i]}
        text={text[i]}
        email={email[i]}
        key={i * 7}
      />
    );
  }
  return (
    <main>
      <Navbar />
      <section className="testimonios">{testimonios}</section>
      <Footer />
    </main>
  );
}

export default Testimonios;
