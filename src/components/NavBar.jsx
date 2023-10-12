import { PropTypes } from "prop-types";

function Boutton(props) {
  return (
    <>
      <div>
        <button onClick={props.leClickS}> Suivant </button>
        <button onClick={props.leClickP}> precedent </button>
      </div>
    </>
  );
}

Boutton.propTypes = {
  leClickP: PropTypes.func.isRequired,
  leClickS: PropTypes.func.isRequired,
};

export default Boutton;
// onClick={pokemonIndex > 0 ? Precedent : ""}
// onClick={pokemonIndex < pokemonList.length - 1 ? suivant : ""}
