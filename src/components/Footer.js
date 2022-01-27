import '../styles/layout/Footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <small>
        Made with ❤️ and fun by
        <a className="github" href="https://github.com/NormaDeveloper">
          {' '}
          Norma Rivas
        </a>
      </small>
    </footer>
  );
};

export default Footer;
