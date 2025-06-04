import { useState } from 'react'

import './App.css'

import Page from './page/pages'
import Homepage from './page/homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}
export default App
