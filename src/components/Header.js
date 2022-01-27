import '../styles/layout/Header.scss';
import logo from '../images/logo_hp.png';
const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="Harry Potter logo" className="header__logo" />
      {/* <h2 className="header__subtitle">
        "No son nuestras habilidades las que muestran cómo somos, sino nuestras
        elecciones"
      </h2> */}
      <h2 className="header__subtitle">Busca tu personaje y déjate hechizar</h2>
      {/* <h3>¿Qué personaje elegirás?</h3> */}
    </header>
  );
};

export default Header;
