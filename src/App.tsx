import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import End from './pages/End'

function App() {

  return (
    <>
      <header>
        <h1>Desafio 8 - React Router</h1>

        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/end' element={<End />} />
        </Routes>
      </main>
    </>
  )
}

export default App
