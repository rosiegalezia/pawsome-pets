import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GenerateName from './Pages/GenerateName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GenerateName/>
    </>
  )
}

export default App
