import bird from "./img/bird.jpg";
import "./Content.css";
const Content = () => {
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.1rem",
    textAlign: "justify",
  };
  const imgStyle = {
    borderRadius: "20px",
    width: "400px",
    cursor: "pointer",
    display: "block",
    margin: "auto",
  };
  return (
    <main>
      <h2 style={{ color: "red", backgroundColor: "black" }}>React Recap</h2>
      <p>react js </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/10/26/18/18/coneflower-8343278_640.jpg"
        alt=""
      />
      <img src="./assets/mountains.jpg" alt="" style={imgStyle} />
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/10/01/13/54/bird-8287451_1280.jpg"
        alt=""
      />
      <img src={bird} alt="bird" style={imgStyle} />
      <p style={parStyle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </p>
      <h3>this is h3 tag</h3>
    </main>
  );
};

export default Content;
