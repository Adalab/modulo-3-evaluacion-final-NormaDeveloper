import React from 'react';
import { Link } from 'react-router-dom';
import speciesTranslate from '../services/speciesTranslate';
import '../styles/layout/Character.scss';
import propTypes from 'prop-types';
const Character = (props) => {
  return (
    <Link to={`/character/${props.character.id}`} className="character__link">
      <img
        src={props.character.photo}
        alt="character"
        className="characterImg"
      />
      <h3>{props.character.name}</h3>
      <p>{speciesTranslate(props.character.species)}</p>
    </Link>
  );
};

Character.propTypes = {
  character: propTypes.shape({
    photo: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    species: propTypes.string.isRequired,
  }),
};
export default Character;
