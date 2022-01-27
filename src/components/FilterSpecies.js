import speciesTranslate from '../services/speciesTranslate';
import '../styles/layout/FilterSpecies.scss';
const FilterSpecies = (props) => {
  const getSpecies = () => {
    const species = props.data.map((user) => user.species);
    const uniqueSpecies = new Set(species);
    const uniques = [...uniqueSpecies];
    return uniques;
  };
  const notRepeatedSpecies = getSpecies();

  const handleChangeCheckbox = (e) => {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    props.updateCheckboxes(value, checked);
  };

  const htmlCheckboxes = notRepeatedSpecies.map((specie, index) => (
    <label className="checkbox" key={index} htmlFor={specie}>
      <span>{speciesTranslate(specie)} </span>
      <input
        onChange={handleChangeCheckbox}
        type="checkbox"
        id={specie}
        name="species"
        value={specie}
        className="box"
      />
    </label>
  ));

  return (
    <>
      <label className="speciesLabel" htmlFor="Species">
        Selecciona la especie
      </label>
      {htmlCheckboxes}
    </>
  );
};

export default FilterSpecies;
