import './App.css'
import { PokemonExplorer } from './components/PokemonExplorer'
import usePokemonList from './hooks/UsePokemonList'


function App() {
  const { pokemonList} = usePokemonList()
 


  return (
    <main className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6 text-center">Explorador de Pokémon</h1>
    <PokemonExplorer pokemonList={pokemonList}   />

  </main>
  )
}

export default App
