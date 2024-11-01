import { useContext } from "react"
import { MoneyContext } from "../App"

function Brother() {

    const [Wmoney] = useContext(MoneyContext)

  return (
    <div className="border p-5 rounded-lg">
      Brother : {Wmoney}
    </div>
  )
}

export default Brother
