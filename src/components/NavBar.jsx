import React from "react";

function NavBar({ pokemonList, pokemonIndex }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => pokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
export default NavBar;

// function Boutton(props) {
//   return (
//     <>
//       <div>
//         <button onClick={props.leClickP}> precedent </button>
//         <button onClick={props.leClickS}> Suivant </button>
//       </div>
//     </>
//   );
// }
