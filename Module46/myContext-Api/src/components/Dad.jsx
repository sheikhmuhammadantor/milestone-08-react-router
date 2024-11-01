import { createContext } from "react";
import Brother from "./Brother"
import MySelf from "./MySelf"
import Sister from "./Sister"

const person = {
    name: 'Nothing',
    age: 21,
    type: "Emotional"
}
export const AssetsContext = createContext(person);

function Dad() {


    return (
        <div className="border p-5 rounded-lg">
            Dad
            <AssetsContext.Provider value={person}>
                <div className="flex gap-5 items-start">
                    <MySelf></MySelf>
                    <Brother></Brother>
                    <Sister></Sister>
                </div>
            </AssetsContext.Provider>
        </div>
    )
}

export default Dad
