import './App.css'

import { Route, Routes } from 'react-router'

import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <main>Main</main>
    </div>
  )
}

export default App
