import { useNavigate } from 'react-router-dom';
import SuccessRegImage from '../assets/images/success_registration.png'

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white  rounded-lg shadow-md w-full max-w-md text-center">
        <div className="mb-6">
          <img src={SuccessRegImage} alt="Success" className="mx-auto" />
        </div>
        <h2 className="text-2xl font-semibold mb-4 py-6">You are successfully registered!</h2>
        <button 
          onClick={handleLogin} 
          className="text-xs py-4 px-40 mb-8 mx-5 bg-[#5932ea] text-white rounded-lg hover:bg-[#6e36ff]"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
