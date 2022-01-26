import speciesTranslate from '../services/speciesTranslate';

const FilterSpecies = (props) => {
  const getSpecies = () => {
    const species = props.data.map((user) => user.species);
    const uniqueSpecies = new Set(species);
    const uniques = [...uniqueSpecies];
    return uniques;
  };
  const notRepeatedSpecies = getSpecies();
  console.log(notRepeatedSpecies);

  const handleChangeCheckbox = (e) => {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    props.updateCheckboxes(value, checked);
  };

  const htmlCheckboxes = notRepeatedSpecies.map((specie, index) => (
    <label key={index} htmlFor={specie}>
      {speciesTranslate(specie)}
      <input
        onChange={handleChangeCheckbox}
        type="checkbox"
        id={specie}
        name="city"
        value={specie}
      />
    </label>
  ));

  return (
    <>
      <label htmlFor="Species">Especies: </label>
      {htmlCheckboxes}
    </>
  );
};

export default FilterSpecies;
