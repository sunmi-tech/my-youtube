import './App.css'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Tody'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gasp from './pages/Gsap'
import Port from './pages/port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/today' element={<Today />}></Route>
        <Route path='/developer' element={<Developer />}></Route>
        <Route path='/webd' element={<Webd />}></Route>
        <Route path='/website' element={<Website />}></Route>
        <Route path='/gasp' element={<Gasp />}></Route>
        <Route path='/port' element={<Port />}></Route>
        <Route path='/youtube' element={<Youtube />}></Route>
        <Route path='/channel/:channelId' element={<Channel />} />
        <Route path='/video/:videoId' element={<Video />} />
        <Route path='/search/:searchId' element={<Search />} />
        <Route path='*' element={<Not />}></Route>
      </Routes>
    </>
  )
}

export default App
