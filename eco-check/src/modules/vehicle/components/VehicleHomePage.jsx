import React, { useEffect, useState } from "react";
import { getVehicleByOwnerId } from '../services/vehicleService';

export default function VehiclePage() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const ownerId = user.userId;

      getVehicleByOwnerId(ownerId)
        .then((response) => {
          setVehicles(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">List of Vehicles</h2>
      {/* Bạn có thể thêm hàm addNewVehicle sau */}
      <button className="btn btn-primary mb-2">Add Vehicle</button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Plate Number</th>
            <th>Model</th>
            <th>Brand</th>
            <th>Manufacture Year</th>
            <th>Engine Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.vehicleId}>
              <td>{vehicle.plateNumber}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.manufactureYear}</td>
              <td>{vehicle.engineNumber}</td>
              <td>{vehicle.status}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => console.log("Update", vehicle.vehicleId)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => console.log("Delete", vehicle.vehicleId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
