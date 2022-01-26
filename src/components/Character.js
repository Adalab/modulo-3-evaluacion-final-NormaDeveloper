import React from 'react';
import { Link } from 'react-router-dom';
import speciesTranslate from '../services/speciesTranslate';

const Character = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <img src={props.character.photo} alt="" />
      <h3>{props.character.name}</h3>
      {/* <p>{props.character.species}</p> */}
      <p>{speciesTranslate(props.character.species)}</p>
    </Link>
  );
};
export default Character;
