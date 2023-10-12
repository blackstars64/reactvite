import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // const suivant = () => {
  //   setPokemonIndex(pokemonIndex + 1);
  // };
  // const precedent = () => {
  //   setPokemonIndex(pokemonIndex - 1);
  // };
  // function incrementation(e) {
  //   if (e === precedent && pokemonIndex > 0) {
  //     precedent();
  //   } else if (e === suivant && pokemonIndex < pokemonList.length - 1) {
  //     suivant();
  //   }
  // }

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar pokemonList={pokemonList} pokemonIndex={setPokemonIndex} />
    </>
  );
}

export default App;
