import './App.css'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Tody'
import Developer from './pages/Developer'
import Cat from './pages/Cat'
import Cooker from './pages/Cooker'
import VarietyShow from './pages/varietyShow'
import News from './pages/News'
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
    <Header />
    <Main>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/today' element={<Today />}></Route>
        <Route path='/developer' element={<Developer />}></Route>
        <Route path='/cat' element={<Cat />}></Route>
        <Route path='/cooker' element={<Cooker />}></Route>
        <Route path='/varietyShow' element={<VarietyShow />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/channel/:channelId' element={<Channel />} />
        <Route path='/video/:videoId' element={<Video />} />
        <Route path='/search/:searchId' element={<Search />} />
        <Route path='*' element={<Not />}></Route>
      </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
