function Button(props) {
  const handleResetBtn = (e) => {
    props.resetInputs();
  };
  return (
    <button className="btn" onClick={handleResetBtn}>
      Reset
    </button>
  );
}

Button.propTypes = {};

export default Button;
