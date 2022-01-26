// Fichero src/components/App.js

import { Link, Route, Switch } from 'react-router-dom'; // importo componentes
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import CharacterNotFound from './CharacterNotFound';

function App() {
  //State variables
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  //Global var
  const URL = 'https://hp-api.herokuapp.com/api/characters/house/';

  const defaultPhoto =
    'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter';

  //Hooks
  //UseEffect Api
  useEffect(() => {
    getApiData(URL, filterHouse).then((dataFromApi) => {
      const filterdData = dataFromApi.map((each) => {
        const cleanObject = {
          name: each.name,
          photo:
            each.image === ''
              ? each.image.replace(each.image, defaultPhoto)
              : each.image,
          species: each.species,
          alive: each.alive,
          gender: each.gender === 'female' ? 'Mujer' : 'Hombre',
          house: each.house,
          id: Math.ceil(Math.random() * 10000),
        };

        //Con el return del map saco el objeto limpio para usarlo en el .then
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
    });

  const renderDetail = (routerData) => {
    //Recieve by props all the url info
    //But we need just the ID (path="/character/:characterId")
    console.log(routerData);
    const pathId = routerData.match.params.characterId;
    //So we can select that specific character from my dataArr
    const foundCharacter = data.find((character) => character.id === pathId);

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
            />
            <CharactersList data={filteredCharacters} />
          </Route>
          <Route
            exact
            //When it finds this pattern...
            path="/character/:characterId"
            //...it will execute this function to render the detail
            renderDetail={renderDetail}
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
