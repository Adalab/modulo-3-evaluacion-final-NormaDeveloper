import '../styles/App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import ls from '../services/localStorage';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import CharacterNotFound from './CharacterNotFound';
import Header from './Header';
import Footer from './Footer';
import placeholderImg from '../images/placeholderPhoto.png';
import PlaySound from './PlaySound';

function App() {
  //State variables
  const [data, setData] = useState(ls.get('data', []));
  const [filterName, setFilterName] = useState(ls.get('filterName', ''));
  const [filterHouse, setFilterHouse] = useState(
    ls.get('filterHouse', 'gryffindor')
  );
  const [checkboxSelectedList, setCheckboxSelectedList] = useState(
    ls.get('checkboxSelectedList', [])
  );
  const [sortCheckboxes, setSortCheckboxes] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Global var
  const URL = 'https://hp-api.herokuapp.com/api/characters/house/';

  const defaultPhoto = placeholderImg;

  //Hooks
  //UseEffect LS
  useEffect(() => {
    ls.set('data', data);
    ls.set('filterHouse', filterHouse);
    ls.set('filterName', filterName);
    ls.set('checkboxSelectedList', checkboxSelectedList);
  }, [data, filterHouse, filterName, checkboxSelectedList]);

  //UseEffect Api
  useEffect(() => {
    setIsLoading(true);
    getApiData(URL, filterHouse).then((dataFromApi) => {
      const filterdData = dataFromApi.map((each, index) => {
        const cleanObject = {
          name: each.name,
          photo:
            each.image === ''
              ? each.image.replace(each.image, defaultPhoto)
              : each.image,
          species: each.species,
          alive: each.alive ? 'Vivo' : 'Muerto',
          gender: each.gender === 'female' ? 'Mujer' : 'Hombre',
          house: each.house,
          id: index,
        };

        //Get clean object with map's return, so we can use it in .then
        return cleanObject;
      });

      //Save filtered object in Data
      setData(filterdData);
      setIsLoading(false);
    });
  }, [filterHouse]);

  //Events functions
  const updateFilterName = (inputValue) => {
    setFilterName(inputValue);
  };

  const updateFilterHouse = (inputValue) => {
    setFilterHouse(inputValue);
  };

  const updateCheckboxes = (value, checked) => {
    checked
      ? setCheckboxSelectedList([...checkboxSelectedList, value])
      : setCheckboxSelectedList(
          checkboxSelectedList.filter((each) => each !== value)
        );
  };

  const updateSortName = (checked) => {
    setSortCheckboxes(checked);
  };

  const resetInputs = () => {
    setFilterName('');
    setFilterHouse('gryffindor');
    setCheckboxSelectedList([]);
    ls.clear();
  };

  //variables or functions with html
  const filteredCharacters = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase())
    )

    .filter((character) =>
      checkboxSelectedList.length === 0
        ? true
        : checkboxSelectedList.includes(character.species)
    );

  const allFilteredCharacters = sortCheckboxes
    ? filteredCharacters.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
    : false;

  const renderDetail = (routeData) => {
    //Recieve by props all the url info
    //But we need just the ID (path="/character/:characterId")

    const pathId = routeData.match.params.characterId;
    //So we can select that specific character from my dataArr
    const foundCharacter = data.find(
      (character) => character.id === parseInt(pathId)
    );

    return !foundCharacter ? (
      <CharacterNotFound />
    ) : (
      //And we send that specific found Character to Character Detail
      <CharacterDetail character={foundCharacter} />
    );
  };

  return (
    <div className="wholePage">
      <Header />

      <main className="main">
        <Switch>
          <Route exact path="/">
            <PlaySound />
            <Filters
              updateFilterName={updateFilterName}
              filterName={filterName}
              updateFilterHouse={updateFilterHouse}
              filterHouse={filterHouse}
              resetInputs={resetInputs}
              data={data}
              checkboxSelectedList={checkboxSelectedList}
              updateCheckboxes={updateCheckboxes}
              updateSortName={updateSortName}
              checked={sortCheckboxes}
            />

            <CharactersList
              data={allFilteredCharacters}
              isLoading={isLoading}
            />
          </Route>
          <div className="modalContainer">
            <Route
              exact
              //When it finds this pattern...
              path="/character/:characterId"
              //...it will execute this function to render the detail
              render={renderDetail}
            />
          </div>

          <Route path="/">
            <h2>Página no encontrada</h2>
            <Link to="/">
              <p> Volver </p>
            </Link>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
