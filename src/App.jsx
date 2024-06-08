import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import About from './pages/about'
import Card from './components/card'
import Video from './components/video'
import Contact from './pages/contact'

function App() {
    const [count, setCount] = useState(0)
  
    return (
      <>
  <Navbar />
  <Banner />
  <About />
  <Video />
  <Card />
  <Contact />
  
      </>
    )
  }
  
  export default App
  