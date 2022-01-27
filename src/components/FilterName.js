import '../styles/layout/FilterName.scss';
const FilterName = (props) => {
  const handleFilterName = (e) => {
    props.updateFilterName(e.currentTarget.value);
  };
  return (
    <label htmlFor="name" className="filterName__label">
      Busca tu personaje
      <input
        type="text"
        onChange={handleFilterName}
        value={props.filterName}
        id="name"
        name="filterName"
        className="inputName"
        placeholder="Harry Potter"
      />
    </label>
  );
};
export default FilterName;
