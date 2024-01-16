import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OnboardingPage from './pages/OnboardingPage';
import Login from './pages/LoginPage';
import Info from './pages/signup/InfoPage';
import Confirm from './pages/signup/ConfirmPage';
import MaganeMain from './pages/manage/MainPage';
import Sign from './pages/manage/SignConfirmPage';
import Room from './pages/manage/RoomConfirmPage';

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
          <Route path="/manage/1" element={<MaganeMain />} />
          <Route path="/manage/2" element={<Sign />} />
          <Route path="/manage/3" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
