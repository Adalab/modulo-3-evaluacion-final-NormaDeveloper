import '../styles/layout/FilterAlive.scss';
function FilterAlive(props) {
  const handleChangeCheckbox = (e) => {
    const checked = e.currentTarget.checked;
    props.updateAliveCheckbox(checked);
  };

  return (
    <label className="aliveCheckboxLabel" htmlFor="alive">
      <span>Ver sólo los personajes muertos</span>
      <input
        onChange={handleChangeCheckbox}
        type="checkbox"
        id="alive"
        name="alive"
        checked={props.alive}
        className="aliveBox"
      />
    </label>
  );
}

FilterAlive.propTypes = {};

export default FilterAlive;
