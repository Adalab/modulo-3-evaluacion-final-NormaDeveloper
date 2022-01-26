import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
const handleForm = (e) => {
  e.prevent.Default();
};

const Filters = (props) => {
  return (
    <section className="Filter">
      <h2>Filtrado</h2>
      <form action="" onSubmit={handleForm}>
        {/* -----------NAME----------- */}
        <FilterName
          updateFilterName={props.updateFilterName}
          filterName={props.filterName}
        />
        {/* -----------HOUSE----------- */}
        <FilterHouse updateFilterHouse={props.updateFilterHouse} />
      </form>
    </section>
  );
};
export default Filters;
