import { useState } from "react"

const useInputStateObj = (defaultValue = null) => {
    const [data, setData] = useState(defaultValue);

    const onChange = (vlu) => {
        setData(vlu.target.value);
    }
    return {
        data,
        onChange
    }
}

export default useInputStateObj;
