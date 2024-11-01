import { useContext } from "react"
import {MoneyContext} from '../App';

function Niece() {

   const moneyArr = useContext(MoneyContext)
   const setmMoneyArray = moneyArr[1];


  return (
    <div className="border p-5 rounded-lg">
      Niece
      <div>
        Money : {moneyArr[0]}
      </div>
      <button className="border-2 border-red-500 p-2" onClick={() => setmMoneyArray(moneyArr[0] + 1024)}>Add 1000 Tk</button>
    </div>
  )
}

export default Niece
