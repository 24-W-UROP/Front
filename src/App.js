import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OnboardingPage from './pages/OnboardingPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
