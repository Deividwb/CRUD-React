import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './styles.css'

const FormHooks = () => {
  const [formData, setFormData] = useState([
    {
      title: '',
      description: '',
      content: '',
    },
  ])

  const handleChange = (e) => {
    let newProp = formData
    newProp[e.target.name] = e.target.value
    setFormData({ ...newProp })
  }

  const handleTeste = (e) => {
    formData(([e.target.name] = e.target.value))
    setFormData(...formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //   let enptyValues = Object.values(form).some((obj) => obj == '')
    console.log(formData)
  }

  const errors = 'Campo Requerido'

  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1>Criar postagem</h1>
          <div className="line-post"></div>

          <div className="card-body-post">
            <form onSubmit={(e) => handleTeste(e)}>
              <div className="fields">
                <label>Título</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={(e) => handleTeste(e)}
                />
                <p className="error-message"></p>
              </div>

              <div className="fields">
                <label>Descrição</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={(e) => handleTeste(e)}
                />
                <p className="error-message">{errors.description?.message}</p>
              </div>

              <div className="fields">
                <label>Conteúdo</label>
                <textarea
                  type="text"
                  name="content"
                  value={formData.content}
                  onChange={(e) => handleChange(e)}
                />

                <p className="error-message">{errors.content?.message}</p>
              </div>

              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FormHooks
