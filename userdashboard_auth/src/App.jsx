import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationFormOne from './components/RegistrationFormOne';
import RegistrationFormTwo from './components/RegistrationFormTwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register1" element={<RegistrationFormOne />} />
        <Route path="/register2" element={<RegistrationFormTwo />} />
        <Route path="/" element={<RegistrationFormOne />} />
      </Routes>
    </Router>
  );
}

export default App;
