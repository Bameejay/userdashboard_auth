import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationFormTwo = () => {
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
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Personal information</h2>
          <span className="text-green-600">2 of 3</span>
          <button className="text-gray-400">&times;</button>
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.fullName && formik.touched.fullName ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input 
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input 
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
            {formik.touched.gender && formik.errors.gender ? (
              <p className="text-red-500 text-sm">{formik.errors.gender}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <input 
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <input 
              type="text"
              name="birthday"
              placeholder="Birthday (Optional)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthday}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.birthday && formik.touched.birthday ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">Save information</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormTwo;
