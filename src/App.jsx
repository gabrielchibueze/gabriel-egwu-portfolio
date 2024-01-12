import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
// import Resume from './pages/resume'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='contact' element={<Contact/>}/>
          {/* <Route path='resume' element={<Resume />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
