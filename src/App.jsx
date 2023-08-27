import { useState } from 'react'
import Footer from './components/Footer'
import About from './components/About'
import Interests from './components/Interests'
import Info from './components/Info'

// To run use npm start dev
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Info></Info>
        <About></About>
        <Interests></Interests>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
