import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './Index'


function App() {
  const [count, setCount] = useState(10)

  return (
    <>
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>

        <Index greeting='Good Afternoon' />
    </>
  )
}

export default App
