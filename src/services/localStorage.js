//Function that gets a property from LS
const get = (key, defaultValue) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorageData);
  }
};
//Function that sets a property and its value in LS
const set = (key, value) => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};

//Function that deletes all LS
const clear = () => {
  localStorage.clear();
};

//We create a temporal object that we will export
const objectToExport = {
  get,
  set,
  clear,
};

//We export that temporal object
export default objectToExport;
