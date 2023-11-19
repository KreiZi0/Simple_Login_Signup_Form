import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Use the navigate function to go back to http://localhost:3000/
    navigate('/');
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
      <div className='bg-white p-3 rounded'>
        <h2>Olete sisse logitud!</h2>
        <button onClick={handleGoBack} className='btn align-items-center btn-primary w-100 rounded-0'>Logi välja</button>
      </div>
    </div>
  );
}

export default Home;