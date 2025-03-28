import './App.css'
import { Explorer } from './components/Explorer'
import Footer from './components/Footer'
import usePokemonList from './hooks/UsePokemonList'


function App() {
  const { pokemonList } = usePokemonList()

  return (
    <><main className="container mx-auto px-4 py-8">
      <img className="mx-auto mb-2" src='/pokeball.svg' width={40} />
      <h1 className="text-xl md:text-3xl font-bold  px-3 md:px-10 mb-5 text-center">Explorador de Pokémon</h1>
      <Explorer pokemonList={pokemonList} />

    </main><Footer /></>
  )
}

export default App
