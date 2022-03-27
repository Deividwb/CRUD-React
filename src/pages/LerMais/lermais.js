import React from 'react'
import Header from '../../components/Header/Header'
import './styles.css'

const LerMais = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>{'lermais.title'}</h2>
            </header>

            <div className="line"></div>

            <p>{'lermais.content'}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LerMais
