// Fichero src/components/App.js

import { Link, Route, Switch } from 'react-router-dom'; // importo componentes
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

function App() {
  //State variables
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  //Global var
  const defaultPhoto =
    'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter';

  //Hooks
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      const filterdData = dataFromApi.map((each) => {
        const cleanObject = {
          name: each.name,
          photo:
            each.image === ''
              ? each.image.replace(each.image, defaultPhoto)
              : each.image,
          species: each.species,
          alive: each.alive,
          gender: each.gender,
          house: each.house,
          // id:
        };

        //Con el return del map saco el objeto limpio para usarlo en el .then
        return cleanObject;
      });
      console.log(filterdData);
      //Guardo el objeto ya filtrado en mi Data
      setData(filterdData);
    });
  }, []);

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
    })
    .filter((character) =>
      filterHouse === 'All' ? true : filterHouse === character.house
    );

  return (
    <div>
      <h2>HARRY POTTER</h2>
      <Filters
        updateFilterName={updateFilterName}
        filterName={filterName}
        updateFilterHouse={updateFilterHouse}
      />
      <CharactersList data={filteredCharacters} />
      <CharacterDetail />
    </div>
  );
}

export default App;
