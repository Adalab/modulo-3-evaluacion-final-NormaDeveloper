const FilterHouse = (props) => {
  const handleFilterHouse = (e) => {
    props.updateFilterHouse(e.currentTarget.value);
  };
  return (
    <label htmlFor="house">
      House
      <select
        onChange={handleFilterHouse}
        name="house"
        id="house"
        className="house"
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
