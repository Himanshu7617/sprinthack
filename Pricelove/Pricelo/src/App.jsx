import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PricingContainer from "./pricing-component/pricing-component-container";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <PricingContainer></PricingContainer>
      </div>
    </>
  )
}

export default App
