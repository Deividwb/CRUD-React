import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import './styles.css'
import More from '../../images/more.svg'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get(' http://localhost:8000/cruderPost')
      .then((response) => {
        setPosts(response.data)
      })
      .catch(() => {
        alert('Deu errado Feed')
      })
  }, [])

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:8000/cruderPost${id}`)
      .then(() => {
        console.log('Sucesso')
      })
      .catch(() => {
        console.log('Deu errado deletar')
      })
  }

  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{post.title}</h2>
                  <img src={More} />
                </header>

                <div className="line"></div>

                <p>{post.description}</p>

                <div className="btns">
                  <div className="btn-edit">
                    {/* <Link to={{ pathname: `/edit/${post._id}` }}> */}
                    <Link to={'/edit'}>
                      <button>Edit</button>
                    </Link>
                  </div>

                  <div className="btn-readmore">
                    {/* <Link to={{ pathname: `/lermais/${post._id}` }}> */}
                    <Link to={'/lermais'}>
                      <button>Ler mais</button>
                    </Link>
                  </div>

                  <div className="btn-delete">
                    <button onClick={() => deletePost(post._id)}>delete</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Feed
