import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Props from './Component/Props/Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HELLO</h1>
      <Props name={"props.name"}/>

      
    </>

  )
}

export default App
