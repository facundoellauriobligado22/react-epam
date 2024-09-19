import "./App.css";
import Form from "./components/jsx/form.jsx";
import Table from "./components/jsx/table.jsx";
import Navbar from "./components/jsx/navbar.jsx";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [vehicles, setVehicles] = useState([]);

  const addVehicle = (newVehicle) => {
    setVehicles([...vehicles, newVehicle]);
  };

  return (
    <div className="App vh-100">
      <header>
        <Navbar />
      </header>
      <body className="App-body">
        <div className="container-fluid row">
          <div className="col-xl-1"></div>
          <div className="col-xl-4 mt-2 mb-1">
            <h1>Registro de vehículos</h1>
            <Form addVehicle={addVehicle} />
          </div>
          <div className="col-xl-2 container-divider">
            <hr className="vertical-line" />
          </div>
          <div className="col-xl-4 mt-2 mb-1">
            <h1>Peaje Villa María-Rosarío</h1>
            <Table vehicles={vehicles} />
          </div>
          <div className="col-xl-1"></div>
        </div>
        <div className="container-fluid row">
          <div className="col-xl-12">
            <hr></hr>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;