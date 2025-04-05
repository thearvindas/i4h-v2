import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PelvicPain101 from './pages/PelvicPain101';
import Overview from './pages/Overview';
import Resources from './pages/Resources';
import PatientRecs from './pages/PatientRecs';
import About from './pages/About';
import Recommendations from './pages/Recommendations';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pelvic-pain-101" element={<PelvicPain101 />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 