import { useNavigate } from 'react-router-dom';

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <div className="mb-6">
          <img src="/path/to/success-image.png" alt="Success" className="mx-auto" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">You are successfully registered!</h2>
        <button 
          onClick={handleLogin} 
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
