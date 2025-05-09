import uxforLogoWhite from '../assets/logo-uxfor-outline-white.svg';
import { Link } from 'react-scroll';

export function Navbar() {
  return (
    <nav>
      <div>
        <a href="./">
          <img src={uxforLogoWhite} className="logo" alt="UXFor Logo" />
          <span>uxfor</span>
        </a>
      </div>
      <ul className="nav">
        <li><Link to="nosSiga" smooth={true} duration={500}>Nos siga</Link></li>
      </ul>
    </nav>
  );
};