import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit from './pages/Edit/edit'
import Feed from './pages/Feed/feed'
import FormHooks from './pages/Form_Hooks/form_hooks'
import LerMais from './pages/LerMais/lermais'
import Post from './pages/Post/post'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/lermais" element={<LerMais />} />
          <Route path="/post" element={<Post />} />
          <Route path="/form" element={<FormHooks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
