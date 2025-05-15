import { useState } from 'react'
import './App.css'
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CodeAnalyzer />
      <Toaster />
    </>
  )
}

export default App
