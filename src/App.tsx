import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeLayout from './Layout/HomeLayout';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import OurApproach from './pages/OurApproach';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';

const App = () => {
  return (
    <Router>
      <HomeLayout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </HomeLayout>
    </Router>
  );
};

export default App;
