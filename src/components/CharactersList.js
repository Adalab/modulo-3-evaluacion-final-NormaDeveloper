import Character from './Character';
const CharactersList = (props) => {
  const htmlList = props.data.map((character, index) => {
    return (
      <li key={index}>
        <Character character={character} />
      </li>
    );
  });
  return <ul>{htmlList}</ul>;
};

export default CharactersList;
