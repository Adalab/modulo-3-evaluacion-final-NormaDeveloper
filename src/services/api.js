const callToApi = (URL, valueHouse) => {
  // Call API
  return fetch(URL + valueHouse).then((response) => response.json());
};

export default callToApi;
