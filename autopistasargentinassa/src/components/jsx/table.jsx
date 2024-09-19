import React from "react";

function Table({ vehicles }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Patente</th>
          <th scope="col">Vehículo</th>
          <th scope="col">Horario</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{vehicle.patente}</td>
            <td>{vehicle.tipo}</td>
            <td>{vehicle.horario}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;