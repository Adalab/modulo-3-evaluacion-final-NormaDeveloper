import '../styles/layout/SortName.scss';
import propTypes from 'prop-types';
function SortName(props) {
  const handleSortCheckbox = (e) => {
    const checked = e.currentTarget.checked;
    props.updateSortName(checked);
  };

  return (
    <label className="sortCheckboxLabel" htmlFor="namesort">
      <span>Ordénalos alfabéticamente</span>
      <input
        className="sortCheckboxInput"
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
