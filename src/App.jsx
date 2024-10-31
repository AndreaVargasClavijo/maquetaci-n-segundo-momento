import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Servicios from './pages/Servicios.jsx';
import Contacto from './pages/Contacto.jsx';
import Productos from './pages/Productos.jsx';
import AcercaDe from './pages/AcercaDe.jsx';
import Footer from './components/Footer'; 


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

