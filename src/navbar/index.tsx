import { Link } from 'react-router-dom';

import './styles.css';
import { ReactComponent as Logo } from './logo.svg';

const Navbar = () => (
  <nav className="main-navbar">
    <Logo />
    <Link to="/" className="logo-text">
      DS Deliver
    </Link>
  </nav>
);

export default Navbar;
