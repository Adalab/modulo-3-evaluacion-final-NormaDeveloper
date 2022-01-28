import propTypes from 'prop-types';
function SortName(props) {
  const handleSortCheckbox = (e) => {
    // const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    props.updateSortName(checked);
  };

  return (
    <label className="checksort--label" htmlFor="namesort">
      Ordénalos alfabéticamente
      <input
        className="checksort--input"
        type="checkbox"
        name="namesort"
        id="namesort"
        checked={props.checked}
        onChange={handleSortCheckbox}
      />
    </label>
  );
}

SortName.propTypes = {
  handleChange: propTypes.func.isRequired,
};

export default SortName;
