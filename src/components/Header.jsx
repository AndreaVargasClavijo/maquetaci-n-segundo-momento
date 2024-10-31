// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/acerca-de">Acerca de</Link>
      </nav>
    </header>
  );
};

export default Header;
