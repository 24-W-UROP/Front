import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import StatusPage from './pages/mainPage/statusPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/statusPage" element={<StatusPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
