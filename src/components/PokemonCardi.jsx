import styles from '../../src/styles/PokemonCardi.module.css';
function PokemonCardi() {
  return (
    <figure className={styles.card}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        alt="squirtle"
        className={styles.cardImg}
      />
      <figcaption>squirtle</figcaption>
    </figure>
  );
}

export default PokemonCardi;