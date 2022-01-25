// Fichero src/components/App.js

import { Link, Route, Switch } from 'react-router-dom'; // importo componentes
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import CharactersList from './CharactersList';

function App() {
  // https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter
  //State variables
  const [data, setData] = useState([]);
  //Global var
  //Hooks
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      const filterdData = dataFromApi.map((each) => {
        //LIMPIO DATOS para quedarme solo con propiedades del JSON q necesito
        const cleanObject = {
          name: each.name,
          photo: each.image,
          species: each.species,
          alive: each.alive,
          gender: each.gender,
          house: each.house,
        };
        //Con el return del map saco el objeto limpio para usarlo en el .then
        return cleanObject;
      });
      //Guardo el objeto ya filtrado en mi Data
      setData(filterdData);
    });
  }, []);

  console.log(data);

  //Events functions
  //variables or functions with html
  return (
    <div>
      <h2>HARRY POTTER</h2>
      <CharactersList data={data} />
    </div>
  );
}

export default App;
