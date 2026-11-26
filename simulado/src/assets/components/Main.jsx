import React from 'react'
import './Main.css'
import { dadosClima } from '../../dadosClima';

function Main() {
  
   const [cidadeSelecionada, setCidadeSelecionada] = useState(null);
  
  function dados([id]) {
    const cidade = dadosClima[id]
    setCidadeSelecionada(cidade)
  }
  
  return (
    <div className='main'>
        <button onClick={()=>(dados(0))}>Florianópolis</button>
        <button onClick={()=>(dados(1))}>São Paulo</button>
        <button onClick={()=>(dados(2))}>Rio de Janeiro</button>
        {cidadeSelecionada && (
          <div>
            <h2>{cidadeSelecionada.name}</h2>
            <p>Temperatura: {cidadeSelecionada.temperature_2m}°C</p>
            <p>Descrição: {cidadeSelecionada.apparent_temperature}</p>
          </div>
        )}
    </div>
  )
}

export default Main