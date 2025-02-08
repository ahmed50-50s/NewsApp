import { useState } from 'react'

import './App.css'
import API from './components/API/API.JSX'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <API/>
    </>
  )
}

export default App
