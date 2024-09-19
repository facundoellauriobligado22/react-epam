import React, { useState, useEffect } from "react";
import Select from "./select.jsx";
import Input from "./input.jsx";
import Button from "./button.jsx";

function Form({ addVehicle }) {
  const [patente, setPatente] = useState("");
  const [tipo, setTipo] = useState("");
  const [horario, setHorario] = useState("");

  const vehiclesOptions = ["Moto", "Auto", "Pickup", "Bus", "Camión"];

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Argentina/Buenos_Aires"
      });
      setHorario(currentTime);
    };

    updateCurrentTime();
    const timer = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addVehicle({ patente, tipo, horario });
    setPatente("");
    setTipo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={patente}
        onChange={(e) => setPatente(e.target.value)}
      />
      <Select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        vehicles={vehiclesOptions}
      />
      <div className="mb-3">
        <label className="form-label">Horario</label>
        <input
          type="text"
          className="form-control"
          value={horario}
          disabled
        />
      </div>
      <Button type="submit" className="btn btn-primary" />
    </form>
  );
}

export default Form;