const FilterName = (props) => {
  const handleFilterName = (e) => {
    props.updateFilterName(e.currentTarget.value);
  };
  return (
    <label htmlFor="name">
      Filtrar por Nombre:
      <input
        type="text"
        onChange={handleFilterName}
        value={props.filterName}
        id="name"
        name="filterName"
      />
    </label>
  );
};
export default FilterName;
