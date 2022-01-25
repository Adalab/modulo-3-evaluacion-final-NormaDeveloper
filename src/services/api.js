const callToApi = (data) => {
  // Llamamos al API
  return fetch(
    'http://hp-api.herokuapp.com/api/characters/house/gryffindor'
  ).then((response) => response.json());
};

export default callToApi;
