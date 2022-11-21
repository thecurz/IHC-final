import star from "../images/star.png";
import "../global.css";
function Display({ img, name, stars }: any) {
  return (
    <div className="person">
      <img src={img} alt="" width={"60%"} />
      <div>{name}</div>
      {stars && (
        <div className="rowd">
          <img src={star} alt="" width={"10%"}></img>
          <img src={star} alt="" width={"10%"}></img>
          <img src={star} alt="" width={"10%"}></img>
          <img src={star} alt="" width={"10%"}></img>
          <img src={star} alt="" width={"10%"}></img>
        </div>
      )}
    </div>
  );
}

function Container({
  title,
  names,
  images,
  stars,
}: {
  title: string;
  names: string[];
  images: string[];
  stars: boolean;
}) {
  const displays: React.ReactElement[] = [];
  for (var i = 0; i < names.length; i++) {
    displays.push(
      <Display img={images[i]} name={names[i]} stars={stars} key={i * 33} />
    );
  }
  return (
    <section className="container">
      <h1>{title}</h1>
      <div className="container-flex">{displays}</div>
    </section>
  );
}

export default Container;
