import { Link } from 'react-router-dom';
import speciesTranslate from '../services/speciesTranslate';
import { IoIosCloseCircle } from 'react-icons/io';
//import { IoIosCloseCircleOutline } from 'react-icons/io';
import '../styles/layout/CharacterDetail.scss';

const CharacterDetail = (props) => {
  return (
    <div className="divHeight">
      <div className="wholeDetailDiv">
        <div className="linkDiv">
          <Link to="/" className="linkClose">
            <IoIosCloseCircle className="close" />
          </Link>
        </div>
        <article className="article">
          <img
            src={props.character.photo}
            alt="characterImage"
            className="detail_img"
          />
          <ul className="detail_list">
            <li>
              <h4 className="titleDetail">{props.character.name}</h4>
            </li>
            <li>
              <p>Estatus: {props.character.alive}</p>
            </li>
            <li>
              <p>Especie: {speciesTranslate(props.character.species)}</p>
            </li>
            <li>
              <p>Género: {props.character.gender}</p>
            </li>
            <li>
              <p>Casa: {props.character.house}</p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};
export default CharacterDetail;
