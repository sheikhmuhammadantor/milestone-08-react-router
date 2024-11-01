import { createContext, useState } from 'react'
import './App.css'
import GrandPa from './components/GrandPa'
import Ind from './components/Ind';

export const MoneyContext = createContext(1000);

function App() {
  const [money, setMoney] = useState(1000);

  return (
    <>
      <div className="border p-5 rounded-lg">
        <h1 className='text-4xl py-2 border mb-2 rounded-xl'>App.jsx <br /> {money}</h1>
        <MoneyContext.Provider value={[money, setMoney]}>
          <GrandPa></GrandPa>
          <Ind></Ind>
        </MoneyContext.Provider>
      </div>
    </>
  )
}

export default App
