import uxforLogoOutlinePrimary from '../assets/logo-uxfor-outline-primary.svg';

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <a href="./">
          <img src={uxforLogoOutlinePrimary} className="logo" alt="UXFor Logo" />
          <span>uxfor</span>
        </a>
        <div className="social-media-icons">
          <span>2025</span>
        </div>
      </div>
    </footer>
  );
}