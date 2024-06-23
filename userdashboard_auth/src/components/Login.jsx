
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebookIcon from '../assets/images/facebook_icon.png'
import appleIcon from '../assets/images/apple_icon.png'
import googleIcon from '../assets/images/google_icon.png'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: values => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredential => {
          const user = userCredential.user;
          console.log('User logged in:', user);
          navigate('/dashboard');
        })
        .catch(error => {
          console.error('Error logging in:', error.message);
        });
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-transparent text-xs" onClick={() => navigate('/register1')}>Register</button>
            <button className="px-4 py-2 bg-transparent border-b-2 border-pink-500 text-xs">Log in</button>
          </div>
          <button className="text-gray-400">&times;</button>
        </div>
             {/* Social Icons */}
             <div className="flex space-x-4 mb-6">
          <button className="p-3 bg-gray-200 rounded-full">
            {/* <FontAwesomeIcon icon={faApple} /> */}
            <img src={appleIcon} alt="apple_icon" className='w-4 h-4'/>
          </button>
          <button className="p-3 bg-gray-200 rounded-full">
            {/* <FontAwesomeIcon icon={faFacebook} /> */}
            <img src={facebookIcon} alt="facebook_icon" className='w-4 h-4'/>
          </button>
          <button className="p-3 bg-gray-200 rounded-full">
            {/* <FontAwesomeIcon icon={faGoogle} /> */}
            <img src={googleIcon} alt="google_icon" className='w-4 h-4'/>
          </button>
        </div>

        <p className="text-xs text-gray-500 mb-6">or login with email</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'focus:ring-purple-500'}`}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full px-4 text-xs py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'focus:ring-purple-500'}`}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-[#5932ea] text-white py-4 rounded-lg hover:bg-[#7b36ff] text-xs">Login to Dashboard</button>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              onChange={formik.handleChange}
              checked={formik.values.rememberMe}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-500 text-xs">Remember me</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
