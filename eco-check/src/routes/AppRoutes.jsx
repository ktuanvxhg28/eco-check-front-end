import { Routes, Route } from 'react-router-dom';
import LoginPage2 from '../modules/auth/pages/LoginPage2';
import VehicleHomePage from '../modules/vehicle/VehicleHomePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage2 />} />
      <Route path="/vehicle" element={<VehicleHomePage />} />
    </Routes>
  );
}

