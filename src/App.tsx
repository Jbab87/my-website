import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ProductList from './components/ProductList/ProductList'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <ProductList/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>More to come!</h1>
      <div className="card">
    
       
      </div>
      <Footer/>
      
    </>
  )
}

export default App
