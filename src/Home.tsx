import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Container from "./components/Container";
import prof1 from "./images/prof1.png";
import prof2 from "./images/prof2.png";
import prof3 from "./images/prof3.png";
import prof4 from "./images/prof4.png";
import plate1 from "./images/plate1.png";
import plate2 from "./images/plate2.png";
import plate3 from "./images/plate3.png";
import plate4 from "./images/plate4.png";
import "./global.css";
function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Why />
      <Container
        title={"Profesionales destacados de HealthCare & Diets"}
        names={[
          "Jimena Jones",
          "Sofia Ramirez",
          "Enrique Sanchez",
          "Salvatore Hamilton",
        ]}
        images={[prof1, prof2, prof3, prof4]}
        stars={true}
      />
      <Container
        title={"Platillos destacados "}
        names={[
          "Arroz con pollo",
          "Lomo saltado",
          "Carapulcra",
          "Tallarines al pesto",
        ]}
        images={[plate1, plate2, plate3, plate4]}
        stars={true}
      />
      <Footer />
    </main>
  );
}

export default Home;
