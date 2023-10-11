import PokemonCard from "./components/PokemonCard";
import "./App.css";
import React from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const thePokemon = pokemonList[0];
  return (
    <>
      <div>
        <PokemonCard pokemon={thePokemon} />
      </div>
    </>
  );
}

export default App;
