import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Reservation from './components/content/reservation';
function App() {
  let isAuthorized = true;
  return (
    <div className="flex w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Reservation authorized={isAuthorized} />} />
        <Route path="/reserve" element={<Reservation authorized={isAuthorized} />} />
      </Routes>
    </div>
  );
}

export default App;
