import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getApiData from '../services/api';
import ls from '../services/localStorage';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import CharacterNotFound from './CharacterNotFound';

function App() {
  //State variables
  const [data, setData] = useState(ls.get('data', []));
  const [filterName, setFilterName] = useState(ls.get('filterName', ''));
  const [filterHouse, setFilterHouse] = useState(
    ls.get('filterHouse', 'gryffindor')
  );
  const [checkboxSelectedList, setCheckboxSelectedList] = useState([]);

  //Global var
  const URL = 'https://hp-api.herokuapp.com/api/characters/house/';

  const defaultPhoto =
    'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter';

  //Hooks
  //UseEffect LS
  useEffect(() => {
    ls.set('data', data);
    ls.set('filterHouse', filterHouse);
    ls.set('filterName', filterName);
  }, [data, filterHouse, filterName]);

  //UseEffect Api
  useEffect(() => {
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
      console.log(filterdData);
      //Save filtered object in Data
      setData(filterdData);
    });
  }, [filterHouse]);

  console.log(data);

  //Events functions
  const updateFilterName = (inputValue) => {
    console.log(inputValue);
    setFilterName(inputValue);
  };

  const updateFilterHouse = (inputValue) => {
    console.log(inputValue);
    setFilterHouse(inputValue);
  };

  const updateCheckboxes = (value, checked) => {
    console.log(value);
    console.log(checked);
    checked
      ? setCheckboxSelectedList([...checkboxSelectedList, value])
      : setCheckboxSelectedList(
          checkboxSelectedList.filter((each) => each !== value)
        );
  };
  console.log(checkboxSelectedList);

  const resetInputs = () => {
    setFilterName('');
    setFilterHouse('gryffindor');
    ls.clear();
  };

  //variables or functions with html
  const filteredCharacters = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase())
    )
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    .filter((character) =>
      checkboxSelectedList.length === 0
        ? true
        : checkboxSelectedList.includes(character.species)
    );

  //FILTRO DE CHECKNBOXES
  const renderDetail = (routeData) => {
    //Recieve by props all the url info
    //But we need just the ID (path="/character/:characterId")
    console.log(routeData);
    const pathId = routeData.match.params.characterId;
    //So we can select that specific character from my dataArr
    const foundCharacter = data.find(
      (character) => character.id === parseInt(pathId)
    );

    console.log(foundCharacter);

    return !foundCharacter ? (
      <CharacterNotFound />
    ) : (
      //And we send that specific found Character to Character Detail
      <CharacterDetail character={foundCharacter} />
    );
  };

  return (
    <div>
      <h2>HARRY POTTER</h2>
      {/* <Header/> */}
      <main>
        <Switch>
          <Route exact path="/">
            <Filters
              updateFilterName={updateFilterName}
              filterName={filterName}
              updateFilterHouse={updateFilterHouse}
              filterHouse={filterHouse}
              resetInputs={resetInputs}
              data={data}
              checkboxSelectedList={checkboxSelectedList}
              updateCheckboxes={updateCheckboxes}
            />

            <CharactersList data={filteredCharacters} />
          </Route>
          <Route
            exact
            //When it finds this pattern...
            path="/character/:characterId"
            //...it will execute this function to render the detail
            render={renderDetail}
          />

          <Route path="/">
            <h2>Página no encontrada</h2>
            <Link to="/">
              <p> Volver </p>
            </Link>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
