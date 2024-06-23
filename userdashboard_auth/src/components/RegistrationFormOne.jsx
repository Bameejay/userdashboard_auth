import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { analytics } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegistrationFormOne = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      promotions: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: values => {
      createUserWithEmailAndPassword(analytics, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User registered:', user);
          navigate('/register2'); // Navigate to the second form
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error registering user:', errorCode, errorMessage);
        });
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-transparent border-b-2 border-pink-500">Register</button>
            <button className="px-4 py-2 bg-transparent">Log in</button>
          </div>
          <button className="text-gray-400">&times;</button>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="p-3 bg-gray-200 rounded-full">
            <FontAwesomeIcon icon={faApple} />
          </button>
          <button className="p-3 bg-gray-200 rounded-full">
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button className="p-3 bg-gray-200 rounded-full">
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>
        <p className="text-center text-gray-500 mb-6">or register with email</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input 
              type="email" 
              name="email"
              placeholder="Email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mb-4 relative">
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'focus:ring-purple-500'}`} 
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
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">Create account</button>
          </div>
          <div className="flex items-center mb-4">
            <input 
              type="checkbox"
              name="promotions"
              id="promotions"
              onChange={formik.handleChange}
              checked={formik.values.promotions}
              className="mr-2" 
            />
            <label htmlFor="promotions" className="text-gray-500">Send me news and promotions</label>
          </div>
          <p className="text-center text-gray-500 text-sm">
            By continuing I agree with the <a href="#" className="text-blue-500">Terms & Conditions</a>, <a href="#" className="text-blue-500">Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormOne;
