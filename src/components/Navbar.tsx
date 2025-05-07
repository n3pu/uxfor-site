import uxforLogoWhite from '../assets/logo-uxfor-outline-white.svg';

export function Navbar() {
  return (
    <nav>
      <div>
        <a href="./">
          <img src={uxforLogoWhite} className="logo" alt="UXFor Logo" />
          <span>uxfor</span>
        </a>
      </div>
      <ul>
        <li><a href="#cursos">Cursos</a></li>
        <li><a href="#quemsomos">Quem somos</a></li>
      </ul>
    </nav>
  );
};