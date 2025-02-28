import { useEffect, useState } from 'react'

import './App.css'
import { getPokemonList } from './services/pokemonService'

function App() {
 
  useEffect(() => {
  getPokemonList().then((data) => {
    console.log(data)
  })
  }, [])

  return (
    <>
  <p className='text-3xl font-bold underline'>hola mundo</p>
    </>
  )
}

export default App
