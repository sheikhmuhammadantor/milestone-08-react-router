import { useContext } from "react"
import { MoneyContext } from "../App"

function Ind() {

    const [indMoney] = useContext(MoneyContext);

  return (
    <div className="border p-5 rounded-lg mt-8">
        Ind : {indMoney}
    </div>
  )
}

export default Ind
