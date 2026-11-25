import React from 'react'
import imgs from './../../../public/imgs/solchuva.svg'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>  
        <img src={imgs} alt="Logo Sol e Chuva" />
        </div>
        <div className='titulo'>
          <h2>Sol e Chuva</h2>
          <p>O tempo certo, onde você estiver</p>
        </div>
    </div>
  )
}

export default Header