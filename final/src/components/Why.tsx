import "../global.css";
import img1 from "../images/plato1.png";
import img2 from "../images/plato2.png";
import img3 from "../images/plato3.png";
function Plate({ img, text }: any) {
  return (
    <div className="plate">
      <img src={img} alt={""} />
      <div style={{"paddingRight": "10%","paddingLeft": "10%"}}>{text}</div>
    </div>
  );
}

function Why() {
  return (
    <section className="why">
      <div>
        <h1 className="header-why">¿Por qué HealthCare & Diets?</h1>
        <article className="header2-hero">
          HealthCare & Diets ofrece un plan personalizado deplatillos variados
          según tus gustos personales y objetivos. Realizar una dieta no volverá
          a ser una rutina sino un estilo de vida.{" "}
        </article>
        <div>
          <div className="rowc">
            <Plate
              img={img1}
              text={"Más de 3000 platillos delisiosos y personalizados  "}
            />
            <Plate
              img={img2}
              text={"Platillos más fáciles y rápidos de preparar"}
            />
          </div>
          <div className="rowc">
            <Plate
              img={img3}
              text={
                "Te motivamos a continuar tu régimen tras un sistema de recompensas por objetivo"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
