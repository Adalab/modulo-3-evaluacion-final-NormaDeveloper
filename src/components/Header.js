import '../styles/layout/Header.scss';
import logo from '../images/logo_hp.png';
const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="Harry Potter logo" className="header__logo" />

      <h2 className="header__subtitle">Déjate hechizar</h2>
    </header>
  );
};

export default Header;
