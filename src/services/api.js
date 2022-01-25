const callToApi = (data) => {
  // Llamamos al API
  return fetch('https://hp-api.herokuapp.com/api/characters/').then(
    (response) => response.json()
  );
};

export default callToApi;
