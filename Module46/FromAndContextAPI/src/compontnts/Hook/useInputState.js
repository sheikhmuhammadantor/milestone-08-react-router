import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [data, setData] = useState(defaultValue);

    const handelSetData = (vlu) => {
        setData(vlu);
    }
    return [data, handelSetData]
}

export default useInputState;
