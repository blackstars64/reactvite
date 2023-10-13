import React from "react";

function NavBar({ pokemonList, pokemonIndex }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) =>
        pokemon.name === "pikachu" ? (
          <button
            key={index}
            onClick={() => {
              pokemonIndex(index);
              alert("pika pikachu !!!");
            }}
          >
            {pokemon.name}
          </button>
        ) : (
          <button
            key={index}
            onClick={() => {
              pokemonIndex(index);
            }}
          >
            {pokemon.name}
          </button>
        )
      )}
    </div>
  );
}
export default NavBar;
