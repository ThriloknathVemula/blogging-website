import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
