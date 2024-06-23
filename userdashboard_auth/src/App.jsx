import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationFormOne from './components/RegistrationFormOne';
import RegistrationFormTwo from './components/RegistrationFormTwo';
import RegistrationFormThree from './components/RegistrationFormThree';
import RegistrationFormFour from './components/RegistrationFormFour';
import RegistrationSuccess from './components/RegistrationSuccess';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationFormOne />} />
        <Route path="/register1" element={<RegistrationFormOne />} />
        <Route path="/register2" element={<RegistrationFormTwo />} />
        <Route path="/register3" element={<RegistrationFormThree />} />
        <Route path="/register4" element={<RegistrationFormFour />} />
        <Route path="/success" element={<RegistrationSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
