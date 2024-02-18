import './App.css'
import PokemonCard from './components/PokemonCard';
import PokemonCardo from './components/PokemonCardo';
import PokemonCardi from './components/PokemonCardi';

function App() {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <section style={container}>
      <h1 style={{color: '#0d1a26', fontWeight: 400}}>Hey! We&apos;re using inline style!</h1>
      <div>
        <PokemonCard />
      </div>
      <div>
        <PokemonCardo />
      </div>
      <div>
        <PokemonCardi/>
      </div>
    </section>
  );
}

export default App;