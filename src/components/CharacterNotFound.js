import { Link } from 'react-router-dom';

const CharacterNotFound = (props) => {
  return (
    <article>
      <h1>ESTE PERSONAJE NO EXISTE</h1>
      <Link to="/">
        <p> Volver </p>
      </Link>
    </article>
  );
};
export default CharacterNotFound;
