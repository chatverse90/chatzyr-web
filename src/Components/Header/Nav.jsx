import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>About</Link>
      </li>
      <li>
        <Link to="/features" onClick={() => setMobileToggle(false)}>Features</Link>
      </li>
      <li>
        <Link to="/services" onClick={() => setMobileToggle(false)}>Services</Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>Contact</Link>
      </li>
    </ul>
  );
}
