function Boutton(props) {
  return (
    <>
      <button onClick={props.onclick}>{props.name}</button>
    </>
  );
}

export default Boutton;
// onClick={pokemonIndex > 0 ? Precedent : ""}
// onClick={pokemonIndex < pokemonList.length - 1 ? suivant : ""}
