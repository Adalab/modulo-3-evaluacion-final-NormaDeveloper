function FilterAlive(props) {
  const handleChangeCheckbox = (e) => {
    const checked = e.currentTarget.checked;
    props.updateAliveCheckbox(checked);
  };

  return (
    <label className="checkbox" htmlFor="alive">
      ¿Qiueres ver los personajes muertos?
      <input
        onChange={handleChangeCheckbox}
        type="checkbox"
        id="alive"
        name="alive"
        checked={props.alive}
        className="box"
      />
    </label>
  );
}

FilterAlive.propTypes = {};

export default FilterAlive;
