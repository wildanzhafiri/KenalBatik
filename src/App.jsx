import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Catalog from './pages/Catalog';
import Overview from './pages/Overview';
import TentangKita from './pages/TentangKita';
import Kuis from './pages/Kuis';
import Cerita from './pages/Cerita';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/tentangkita" element={<TentangKita />} />
        <Route path="/kuis" element={<Kuis />} />
        <Route path="/overview/:batikName" element={<Overview />} />
        <Route path="/cerita" element={<Cerita />} />
        <Route path="/tentangkita" element={<TentangKita />} />
      </Routes>
    </Router>
  );
}

export default App;
