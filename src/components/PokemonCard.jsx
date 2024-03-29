const pokemonList = [
  {name: "bulbasaur",
   imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {name: "mew",
},
];


function PokemonCard() {
  const pokemon = pokemonList[0];
    
  return (
    <figure className="card">
      {pokemon.imgSrc === undefined ? "???" : <img className="card-img" src={pokemon.imgSrc} alt={pokemon.name} />}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
