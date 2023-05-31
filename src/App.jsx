import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
    </Router>
      
    </>
  )
}

export default App
