import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/images/search_icon.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLocationDot, faUserGroup,faClock,faDollarSign } from '@fortawesome/free-solid-svg-icons';

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
        <div className="flex">
          <div className="flex">
          <h2 className="font-semibold mb-6 text-sm">Add address<span className="px-4 py-2 text-green-500 font-bold text-xs">3 of 3</span></h2>
          </div>
          <div className='ml-auto'>
            <button className="font-bold text-black text-xl">&times;</button>
          </div>
        </div>
        
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 relative">
          <img src={searchIcon} alt="" className='w-4 h4 absolute top-4 ml-1 left-1' />
            <input
              type="text" 
              name="address"
              placeholder="Search for address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className={`w-full px-8 py-4 border text-xs rounded-lg  ${formik.errors.address && formik.touched.address ? 'border-red-500' : 'focus:ring-purple-500'}`} 
            />
            {formik.touched.address && formik.errors.address ? (
              <p className="text-red-500 text-sm">{formik.errors.address}</p>
            ) : null}
          </div>
          <div className="flex gap-2 mb-16">
            <button type="button" className="px-4 py-2 text-xs font-bold border rounded-xl text-purple-500 border-purple-500 hover:bg-purple-50">
            <FontAwesomeIcon icon={faLocationDot} />  Use current location
            </button>
            <button type="button" className="px-4 py-2 text-xs font-bold border rounded-xl text-purple-500 border-purple-500 hover:bg-purple-50">
              Add manually
            </button>
          </div>
          <div className="mb-6">
            <p className="text-black text-sm font-bold mb-5">Sharing your address shows:</p>
            <ul className="list-inside text-gray-500 flex flex-col gap-2">
              <li className='text-[10px] font-extrabold text-gray-500'><FontAwesomeIcon icon={faUserGroup} className='mr-2'/>People near you</li>
              <li className='text-[10px] font-extrabold text-gray-500'><FontAwesomeIcon icon={faClock} className='mr-2'/>Estimated delivery time</li>
              <li className='text-[10px] font-extrabold text-gray-500'><FontAwesomeIcon icon={faDollarSign} className='mr-2'/>Estimate shipping costs</li>
            </ul>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-[#5932ea] text-xs text-white py-4 rounded-lg hover:bg-purple-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormThree;
