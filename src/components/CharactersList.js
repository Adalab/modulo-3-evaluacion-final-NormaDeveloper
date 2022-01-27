import '../styles/layout/CharactersList.scss';
import Character from './Character';
import propTypes from 'prop-types';
const CharactersList = (props) => {
  const { data } = props;
  const htmlList = data.map((character, index) => {
    return (
      <li key={index}>
        <Character character={character} />
      </li>
    );
  });
  //If data arr is empty, then shows loading
  //Render <p> while while loading data
  return data.length === 0 ? (
    <p className="notExist">No existe ningún personaje con ese nombre</p>
  ) : (
    <ul className="characters_list">{htmlList}</ul>
  );
};

CharactersList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default CharactersList;
