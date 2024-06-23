import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const RegistrationFormFour = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      streetAddress: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
    },
    validationSchema: Yup.object({
      streetAddress: Yup.string().required('Street address is required'),
      apartment: Yup.string(),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),  
      zipCode: Yup.string().required('Zip code is required'),
    }),
    onSubmit: values => {
      console.log('Address submitted:', values);
      navigate('/success'); // Navigate to the success screen
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex mb-6">
          <div className="flex gap-4 items-center">
          <h2 className="text-xl font-semibold mb-6">Add address <span className=" text-green-500 text-xs ml-3">4 of 4</span></h2>
          </div>
          <div className='ml-auto'>
            <button className="text-black text-xl">&times;</button>
          </div>
        </div>
        
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              name="streetAddress"
              placeholder="Street address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.streetAddress}
              className={`w-full px-4 py-4 border text-xs rounded-lg focus:outline-none focus:ring-2 ${formik.errors.streetAddress && formik.touched.streetAddress ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.streetAddress && formik.errors.streetAddress ? (
              <p className="text-red-500 text-sm">{formik.errors.streetAddress}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              name="apartment"
              placeholder="Apartment (optional)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.apartment}
              className={`w-full px-4 py-4 text-xs border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.apartment && formik.touched.apartment ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.apartment && formik.errors.apartment ? (
              <p className="text-red-500 text-sm">{formik.errors.apartment}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              name="city"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className={`w-full px-4  border py-4 text-xs rounded-lg focus:outline-none focus:ring-2 ${formik.errors.city && formik.touched.city ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.city && formik.errors.city ? (
              <p className="text-red-500 text-sm">{formik.errors.city}</p>
            ) : null}
          </div>
          <div className="mb-4 flex space-x-4">
            <input 
              type="text" 
              name="state"
              placeholder="State"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
              className={`w-1/2 px-4 py-4 text-xs border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.state && formik.touched.state ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            <input 
              type="text" 
              name="zipCode"
              placeholder="Zip code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
              className={`w-1/2 px-4 py-4 text-xs border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.zipCode && formik.touched.zipCode ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
          </div>
          {formik.touched.state && formik.errors.state ? (
            <p className="text-red-500 text-sm">{formik.errors.state}</p>
          ) : null}
          {formik.touched.zipCode && formik.errors.zipCode ? (
            <p className="text-red-500 text-sm">{formik.errors.zipCode}</p>
          ) : null}
          <div className="mb-6">
            <button type="submit" className="w-full text-xs bg-[#5932ea] text-white py-4 rounded-lg hover:bg-[#6e36ff]">Save information</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormFour;
