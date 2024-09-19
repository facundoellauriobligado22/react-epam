import React from "react";

function Select({ value, onChange, vehicles }) {
  return (
    <div className="mb-3">
      <label className="form-label">Tipo de vehículo:</label>
      <select
        className="form-select"
        value={value}
        onChange={onChange}
        required
      >
        <option value="">Seleccione un tipo de vehículo...</option>
        {vehicles.map((vehicle, index) => (
          <option key={index} value={vehicle}>
            {vehicle}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;