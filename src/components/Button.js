import '../styles/layout/Button.scss';

function Button(props) {
  const handleResetBtn = (e) => {
    props.resetInputs();
  };
  return (
    <button className="reset" onClick={handleResetBtn}>
      RESET
    </button>
  );
}

Button.propTypes = {};

export default Button;
