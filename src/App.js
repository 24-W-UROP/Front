import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OnboardingPage from './pages/OnboardingPage';
import Login from './pages/LoginPage';
import Confirm from './pages/signup/ConfirmPage';
import Info from './pages/signup/InfoPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/1" element={<Info />} />
          <Route path="/signup/2" element={<Confirm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
