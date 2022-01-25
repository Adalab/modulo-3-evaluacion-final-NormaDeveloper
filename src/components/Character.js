import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
  return (
    <>
      <Link to={`/character/${props.character.name}`}>
        <img src={props.character.photo} alt="" />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
      </Link>
    </>
  );
};
export default Character;
