import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/path" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
