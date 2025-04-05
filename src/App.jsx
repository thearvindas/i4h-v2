import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PelvicPain101 from './pages/PelvicPain101';
import OvercomingPain from './pages/OvercomingPain';
import Resources from './pages/Resources';
import PatientRecs from './pages/PatientRecs';
import About from './pages/About';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pelvic-pain-101" element={<PelvicPain101 />} />
            <Route path="/overcoming-pain" element={<OvercomingPain />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 