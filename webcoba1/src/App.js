import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Beranda from './pages/Beranda';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './styling.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Beranda />} />
          <Route path='about'  element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;