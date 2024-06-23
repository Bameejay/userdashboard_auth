import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import facebookIcon from '../assets/images/facebook_icon.png'
import appleIcon from '../assets/images/apple_icon.png'
import googleIcon from '../assets/images/google_icon.png'


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
        .required('Email Address is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: values => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
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

        {/* Register and Login Icon */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-transparent border-b-2 border-pink-500 text-xs">Register</button>
            <button 
              className="px-4 py-2 bg-transparent text-xs"
              onClick={() => navigate('/login')}
            > 
              Log in          
            </button>
          </div>
          <button className="text-black text-xl">&times;</button>
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


        <p className="text-start text-gray-400 mb-6 text-xs">or register with email</p>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
        
        {/* Email Input-box */}
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`peer w-full px-4 py-2 text-xs pt-4 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'focus:ring-purple-500'}`}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-1 transition-all text-xs peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-purple-500 font-bold text-gray-400"
          >
            Email Address
          </label>
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs mt-1 ml-4">{formik.errors.email}</p>
          ) : formik.touched.email && !formik.errors.email ? (
            <span className="absolute right-3 top-2 text-green-500">
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
          ) : null}
      </div>

      {/* Password Input-box */}
      <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`peer w-full px-4 py-2 text-xs pt-4 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'focus:ring-purple-500'}`}
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="absolute left-3 top-1 transition-all text-xs peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-purple-500 text-gray-400"
        >
          Password
        </label>
        <span
          className="absolute inset-y-0 right-3 bottom-2 flex items-center text-gray-500 cursor-pointer text-sm mt-1"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 text-xs mt-1 ml-4">{formik.errors.password}</p>
        ) : formik.touched.password && !formik.errors.password ? (
          <span className="absolute right-10 top-2 text-green-500">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        ) : null}
      </div>

      {/* Submit Button */}
      <div className="mb-6">
        <button type="submit" className="w-full bg-[#5932ea] text-white py-4 text-xs rounded-lg hover:bg-[#7b36ff]">Create account</button>
      </div>
      <div className="flex items-center mb-3">
        <input
          type="checkbox"
          name="promotions"
          id="promotions"
          onChange={formik.handleChange}
          checked={formik.values.promotions}
          className="mr-2"
        />

        <label htmlFor="promotions" className="text-gray-500 text-[10px]">Send me news and promotions</label>
      </div>
      <p className="text-center text-gray-500 text-[10px]">
        By continuing I agree with the <a href="#" className="text-blue-500">Terms & Conditions</a>, <br /> <a href="#" className="text-blue-500">Privacy Policy</a>
      </p>
    </form>
      </div>
    </div>
  );
};

export default RegistrationFormOne;
