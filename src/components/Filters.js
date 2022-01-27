import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import FilterSpecies from './FilterSpecies';
import Button from './Button';
import '../styles/layout/Filters.scss';

const Filters = (props) => {
  return (
    <div className="formContainer">
      <form className="form" action="" onSubmit={(e) => e.preventDefault()}>
        {/* -----------NAME----------- */}
        <section className="form__name">
          <FilterName
            updateFilterName={props.updateFilterName}
            filterName={props.filterName}
          />
        </section>
        {/* -----------HOUSE----------- */}
        <section className="form__select">
          <FilterHouse
            updateFilterHouse={props.updateFilterHouse}
            filterHouse={props.filterHouse}
          />
        </section>
        {/* -----------SPECIES----------- */}
        <section className="form__checkboxes">
          <FilterSpecies
            data={props.data}
            checkboxSelectedList={props.checkboxSelectedList}
            updateCheckboxes={props.updateCheckboxes}
          />
        </section>

        <Button resetInputs={props.resetInputs} />
      </form>
    </div>
  );
};
export default Filters;
