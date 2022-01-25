import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <article>
      <h1>{props.character.name}</h1>
      {/* <img src={props.character.photo} alt="" className="" />
      <ul className="">
        <li>
          <h4>{props.character.name}</h4>
        </li>
        <li>
          <p>Estatus: {props.character.alive}</p>
        </li>
        <li>
          <p>Especie: {props.character.species}</p>
        </li>
        <li>
          <p>Género: {props.character.gender}</p>
        </li>
        <li>
          <p>Casa: {props.character.house}</p>
        </li>
      </ul> */}
      <h1>DETALLE PERSONAJE</h1>
      <Link to="/">
        <p> Volver </p>
      </Link>
    </article>
  );
};
export default CharacterDetail;
