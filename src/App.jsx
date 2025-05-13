import "bootstrap/dist/css/bootstrap.min.css";
import Header from './pages/Header';
import Home from './pages/Home';
import Family from './pages/Family';
import Footer from './pages/Footer';
import History from './pages/History';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="text-light bg-dark vh-150">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Family" element={<Family />} />
          <Route path="/History" element={<History />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
