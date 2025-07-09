import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm.jsx';

export default function LoginPage2() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    
    navigate('/vehicle');
  };

  return (
    <div>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}
