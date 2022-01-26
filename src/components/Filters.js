import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import Button from './Button';

const Filters = (props) => {
  return (
    <section className="Filter">
      <h2>Filtrado</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        {/* -----------NAME----------- */}
        <FilterName
          updateFilterName={props.updateFilterName}
          filterName={props.filterName}
        />
        {/* -----------HOUSE----------- */}
        <FilterHouse
          updateFilterHouse={props.updateFilterHouse}
          filterHouse={props.filterHouse}
        />
        <Button resetInputs={props.resetInputs} />
      </form>
    </section>
  );
};
export default Filters;
