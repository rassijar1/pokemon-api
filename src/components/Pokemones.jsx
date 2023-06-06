import './pokemones.css'
import usePokemones from '../hooks/usePokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from './Cargando'
import DetallePokemon from './DetallePokemon'
import Swal from 'sweetalert2';
import Buscador from './Buscador'
import { useState } from 'react'
import {Inicio} from './Icons';

function Pokemon({ id, nombre, imagen, verPokemon }) {
  return (
    <div className='pokemon-card' onClick={verPokemon}>
    <span class="numero">Nº {id}</span>
      <img src={imagen} alt={nombre} className='pokemon-imagen' />
      <p className='pokemon-titulo'>
        <span align="center">{nombre}</span>
      </p>
    </div>
  )
}

function Pokemones() {

  const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones()
  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })
  const [busqueda, setBusqueda] = useState('')

  const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })

  const noVerPokemon = () => {
    setMostrar({ mostrar: false, pokemon: {}})
    setBusqueda('')
  }

 const buscarPokemon = async (e) => {
  e.preventDefault()

  if (!busqueda) return
  
  try {
    const pokemon = await searchPokemon(busqueda)
    console.log(pokemon);
    setMostrar({ mostrar: true, pokemon })
  } catch(error) {
    //window.alert(`No se encontró el pokemon ${busqueda}`)
    Swal.fire({
  icon: 'error',
  title: 'Error!',
  text: `El pokemon ${busqueda} no existe. Vuelve a buscar`
})
    setBusqueda('')
    setMostrar({ mostrar: false, pokemon: {} })
  }
}
  
  return (
    <>
      <DetallePokemon {...mostrar} cerrar={noVerPokemon}/>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon}/>
      <InfiniteScroll
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={verMas}
        loader={<Cargando />}
        endMessage={
          <h3 className='titulo' style={{ gridColumn: '1/6' }}>No hay más pokemones por mostrar</h3>
        }
        className='pokemon-container'
      >
        { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)}/> )}
        <button
  className='scroll-top'
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }}
>
  <i class="fa solid fa fa-home"></i>
</button>
      </InfiniteScroll>
    </>
  )
}

export default Pokemones