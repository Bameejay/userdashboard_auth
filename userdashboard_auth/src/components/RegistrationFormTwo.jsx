import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import infoIcon from '../assets/images/info_icon.png'

const RegistrationFormTwo = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      gender: '',
      phoneNumber: '',
      birthday: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      gender: Yup.string().required('Gender is required'),
      phoneNumber: Yup.string().required('Phone number is required'),
      birthday: Yup.string(),
    }),
    onSubmit: values => {
      console.log('Personal information submitted:', values);
      navigate('/register3'); // Navigate to the third form
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between text-center mb-6">
          <div className="flex space-x-4">
          <h2 className="text-sm font-semibold mb-6">Personal information <span className="px-4 py-2 text-green-500">2 of 3</span></h2>
          </div>
          <div>
          <button className="text-black text-xl">&times;</button>
          </div>
        </div>
        
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              name="fullName"
              placeholder="Full name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className={`w-full px-4 py-3 border rounded-lg text-sm  ${formik.errors.fullName && formik.touched.fullName ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
            ) : null}
          </div>

          {/* Gender Radio Button */}
          <div className="mb-4 flex align-middle">
            <label className="mr-2 text-gray-500 text-sm font-bold">Gender:</label>
            <div className="flex space-x-4">
              <div className='flex'>
              <input 
                  type="radio" 
                  name="gender" 
                  value="Male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mr-2"
                  checked={formik.values.gender === 'Male'}
                />
                <label className="flex items-center text-xs font-bold text-gray-600">
                Male
              </label>
              </div>
              

              <div className='flex'>
              <input 
                  type="radio" 
                  name="gender" 
                  value="Female"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mr-2 text-red-500"
                  checked={formik.values.gender === 'Female'}
                />
              <label className="flex items-center text-xs text-gray-600 font-bold">
                
                Female
              </label>

              </div>
              
            </div>
            {formik.touched.gender && formik.errors.gender ? (
              <p className="text-red-500 text-sm">{formik.errors.gender}</p>
            ) : null}
          </div>
          
          <div className='flex items-center gap-1 mb-3'>
            <img src={infoIcon} alt="info_icon" className='w-3 h-3' />
            <p className='font-bold text-[10px] text-gray-500'>The phone number and birthday are only visible to you</p>
          </div>


          {/* Phone Number Input */}
          {/* <div className="mb-4">
            <input 
              type="text" 
              name="phoneNumber"
              placeholder="Phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className={`w-full px-4 py-2 border rounded-lg text-sm  ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500' : 'focus:ring-[#6e36ff]'}`} 
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <p className="text-red-500 text-xs ml-4">{formik.errors.phoneNumber}</p>
            ) : null}
          </div> */}

<div className="flex mb-4">
        <div className="relative w-1/3 mr-2">
          <select
            name="countryCode"
            id="countryCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.countryCode}
            className={`peer w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.countryCode && formik.touched.countryCode ? 'border-red-500' : 'focus:ring-purple-500'}`}
          >
            <option value="+234">+234 (Nigeria)</option>
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (India)</option>
            {/* Add more country codes as needed */}
          </select>
          <label
            htmlFor="countryCode"
            className="absolute left-3 top-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-purple-500"
          >
            
          </label>
          {formik.touched.countryCode && formik.errors.countryCode ? (
            <p className="text-red-500 text-sm">{formik.errors.countryCode}</p>
          ) : null}
        </div>
        <div className="relative w-2/3">
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className={`peer w-full px-4 py-2 border rounded-lg  ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500' : 'focus:ring-purple-500'}`}
            placeholder=" "
          />
          <label
            htmlFor="phoneNumber"
            className="absolute left-3 top-2 transition-all peer-placeholder-shown:text-gray-500 peer-focus:top-10 text-[10px]"
          >
            Enter Phone Number
          </label>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>
          ) : null}
        </div>
      </div>

          {/* DOB Input */}
          <div className="mb-8">
            <input 
              type="date" 
              name="birthday"
              placeholder="Birthday"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthday}
              className={`w-full px-4 py-2 border rounded-lg  ${formik.errors.birthday && formik.touched.birthday ? 'border-red-500' : 'focus:ring-[#6e36ff]'}`} 
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <p className="text-red-500 text-sm">{formik.errors.birthday}</p>
            ) : null}
              <p className='text-xs text-[10px] text-gray-500 font-bold'>Let us know about your birthday so as not to miss a gift</p>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-[#5932ea] text-xs font-bold py-4 text-white py-2 rounded-lg hover:bg-purple-700">Save information</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormTwo;
