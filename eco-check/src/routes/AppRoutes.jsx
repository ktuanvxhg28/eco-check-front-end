import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../modules/auth/pages/LoginPage';
import VehicleHomePage from '../modules/vehicle/components/VehicleHomePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/vehicle" element={<VehicleHomePage/>} />
    </Routes>
  );
}

