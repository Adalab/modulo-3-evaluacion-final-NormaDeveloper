import '../styles/layout/CharactersList.scss';
import Character from './Character';
import propTypes from 'prop-types';
import loader from '../images/LOADERharry.gif';
const CharactersList = (props) => {
  const { data, isLoading } = props;
  const htmlList = data.map((character, index) => {
    return (
      <li key={index}>
        <Character character={character} />
      </li>
    );
  });

  if (!isLoading) {
    return data.length === 0 ? (
      <p className="notExist">
        Ningún personaje coincide con tu búsqueda. Intenta modificar los filtros
        de la búsqueda
      </p>
    ) : (
      <ul className="characters_list">{htmlList}</ul>
    );
  } else {
    return (
      <img
        src={loader}
        alt="Cargando datos"
        title="Cargando datos"
        className="loader"
      />
    );
  }
};

CharactersList.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default CharactersList;
