const Content = () => {
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.1rem",
    textAlign: "justify",
  };
  return (
    <main>
      <h2 style={{ color: "red", backgroundColor: "black" }}>React Recap</h2>
      <p>react js </p>
      <p style={parStyle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </p>
    </main>
  );
};

export default Content;
