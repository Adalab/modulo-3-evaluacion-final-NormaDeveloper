import { Link } from 'react-router-dom';

const CharacterNotFound = (props) => {
  return (
    <article>
      <h1>No encontrado</h1>
      <Link to="/">
        <p> Volver al inicio</p>
      </Link>
    </article>
  );
};
export default CharacterNotFound;
