import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SelectorPages from './pages/reservationPage/SelectorPages';
import DayPages from './pages/reservationPage/DayPages';
import CalendarsbuttonPage from './pages/reservationPage/CalendarsbuttonPage';
import TimeSelectionPage from './pages/reservationPage/TimeSelectionPage';
import ReservationPage from './pages/reservationPage/ReservationPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectorPages />} />
          <Route path="/DayPages" element={<DayPages />} />
          <Route
            path="/CalendarsbuttonPage"
            element={<CalendarsbuttonPage />}
          />
          <Route path="/TimeSelectionPage" element={<TimeSelectionPage />} />
          <Route path="/ReservationPage" element={<ReservationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
