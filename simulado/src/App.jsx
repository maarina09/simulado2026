
import { useState } from 'react'
import { dadosClima } from './dadosClima'
import { codigosWmo } from './codigosWmo'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import imgs from '../public/imgs/search.png'
import './App.css'

function App() {
  const [busca, setBusca] = useState('')
  const [cidade, setCidade] = useState(null)

  function buscar() {
    const resultado = dadosClima.find(
      item => item.name.toLowerCase() === busca.toLowerCase()
    )

    setCidade(resultado)
  }

  return (
    <div>
      <Header />
      

      <input className='input-lugar'
        value={busca}
        onChange={e => setBusca(e.target.value)}
        placeholder="Digite o nome de uma cidade..."
      />


      <button className='btn-buscar' onClick={buscar}>
      <img className='search' src={imgs} alt="Search" />
        Buscar
        </button>
      
      <Main /> 

      {cidade && (
        <div>
          <h2>{cidade.name}</h2>
          <p>{cidade.current.temperature_2m} °C</p>
        </div>
      )}
     
    </div>
    
  )
}

export default App
