const callToApi = (URL, valueHouse) => {
  // Llamamos al API
  return fetch(URL + valueHouse).then((response) => response.json());
};

export default callToApi;
