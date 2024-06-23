import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationFormOne from './components/RegistrationFormOne';
import RegistrationFormTwo from './components/RegistrationFormTwo';
import RegistrationFormThree from './components/RegistrationFormThree';
import RegistrationFormFour from './components/RegistrationFormFour';
import RegistrationSuccess from './components/RegistrationSuccess';
// import Dashboard from './components/Dashboard';
import Login from './components/Login';

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
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
