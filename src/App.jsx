import './App.css'
import Header from './Components/Header'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<WatchHistory/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
