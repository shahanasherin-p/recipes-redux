import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import View from './pages/View'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:id/view' element={<View/>} />
      <Route path='/*' element={<Pnf/>} />
      </Routes>
     <Footer/>
    </>
  )
}

export default App
