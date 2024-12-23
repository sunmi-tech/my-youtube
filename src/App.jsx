import './App.css'
import { Suspense, lazy } from 'react'
import { Routes,Route } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Tody'));
const Developer = lazy(() => import('./pages/Developer'));
const Cat = lazy(() => import('./pages/Cat'));
const Cooker = lazy(() => import('./pages/Cooker'));
const VarietyShow = lazy(() => import('./pages/varietyShow'));
const News = lazy(() => import('./pages/News'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

function App() {

  return (
    <>
    <Suspense fallback={<Main />}>
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
    </Suspense>
    </>
  )
}

export default App
