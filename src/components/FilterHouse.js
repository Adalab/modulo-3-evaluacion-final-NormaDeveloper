import '../styles/layout/FilterHouse.scss';
const FilterHouse = (props) => {
  const handleFilterHouse = (e) => {
    props.updateFilterHouse(e.currentTarget.value);
  };
  return (
    <label htmlFor="house" className="houseLabel">
      <span className="houseSpan">Selecciona la casa</span>
      <select
        onChange={handleFilterHouse}
        name="house"
        id="house"
        className="inputHouse"
        value={props.filterHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </label>
  );
};
export default FilterHouse;
