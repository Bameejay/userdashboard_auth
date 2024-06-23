import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const RegistrationFormThree = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      address: '',
    },
    validationSchema: Yup.object({
      address: Yup.string().required('Address is required'),
    }),
    onSubmit: values => {
      console.log('Address submitted:', values);
      navigate('/register4'); // Navigate to the fourth form
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <span className="px-4 py-2 border-b-2 border-green-500">3 of 3</span>
          </div>
          <button className="text-gray-400">&times;</button>
        </div>
        <h2 className="text-xl font-semibold mb-6">Add address</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              name="address"
              placeholder="Search for address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.address && formik.touched.address ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.address && formik.errors.address ? (
              <p className="text-red-500 text-sm">{formik.errors.address}</p>
            ) : null}
          </div>
          <div className="flex justify-between mb-6">
            <button type="button" className="px-4 py-2 border rounded-lg text-purple-500 border-purple-500 hover:bg-purple-50">
              Use current location
            </button>
            <button type="button" className="px-4 py-2 border rounded-lg text-purple-500 border-purple-500 hover:bg-purple-50">
              Add manually
            </button>
          </div>
          <div className="mb-6">
            <p className="text-gray-500">Sharing your address shows:</p>
            <ul className="list-disc list-inside text-gray-500">
              <li>People near you</li>
              <li>Estimated delivery time</li>
              <li>Estimate shipping costs</li>
            </ul>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormThree;
