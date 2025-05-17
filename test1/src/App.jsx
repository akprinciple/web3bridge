import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './Index'


function App() {
  const [count, setCount] = useState(10)
const router = createBrowserRouter([
    {
      path: '/',
      element: <Index/>,
      children: [
        {
          index: true,
          element: <LandingPage/>
          // <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est accusantium quam, ducimus magnam aperiam tempora ea vitae eos esse delectus odit. Recusandae neque nostrum blanditiis, eaque minus excepturi reiciendis nulla.</h1>
        },
        {
          path: 'cart',
          element: <CartPage/>
        },
        

    }
  
  return (
    <>
      
    </>
  )
}

export default App
