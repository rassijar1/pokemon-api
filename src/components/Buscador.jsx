import './buscador.css';
import {Buscar} from './Icons'

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
  
  return (
    <>
      <br/>
      <form className='container-buscar' onSubmit={buscarPokemon}>
        <input type="text" placeholder='Busca tu pokemon favorito por nombre o id' className='input-buscar'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} required />
        <button className='btn-buscar' type='submit'>
          <Buscar />
          Buscar pokemon
        </button>
      </form>
    </>
  )
}



export default Buscador;