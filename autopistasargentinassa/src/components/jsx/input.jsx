import React from "react";

function Input({ value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">Patente</label>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder="Patente.."
        required
        maxLength={7}
      />
    </div>
  );
}

export default Input;