import "./App.css";
import freeCodeCampLogo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecomp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
        <div className="container-calculadora">
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
