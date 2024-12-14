import "./index.css";
import Year from "./components/Year";

function App() {
  return (
    <div className="App">
      <header>
        <div className="smallCircle"></div>

        <div className="links">
          <h5>WORKS</h5>
          <h5>ABOUT</h5>
          <h5>CONTACT</h5>
        </div>
      </header>
      <div className="mainContainer">
        <h1>YEARS</h1>
        <div className="yearContainer">
          <Year year="2024" circleColor={["silver", "#2BDCB1"]} name="green" />
          <Year year="2023" circleColor={["silver", "#FFABDD"]} name="pink" />
          <Year year="2022" circleColor={["silver", "#64BBFA"]} name="blue" />
          <Year year="2021" circleColor={["silver", "#FFC700"]} name="orange" />
        </div>
      </div>

      <footer>
        <h5>🐭🐹</h5>
      </footer>
    </div>
  );
}

export default App;
