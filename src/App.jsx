import { useState } from 'react'

import './App.css'

import Page from './page/pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page/>
    </>
  )
}
export default App
