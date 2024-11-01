import { useContext } from "react"
import { AssetsContext } from "./Dad"

function Son() {

    const assets =  useContext(AssetsContext);

  return (
    <div className="border p-5 rounded-lg">
      Son
    <p>Name : {assets.name}</p>
    <p>Type : {assets.type}</p>
    </div>
  )
}

export default Son
