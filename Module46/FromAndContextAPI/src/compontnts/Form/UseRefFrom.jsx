import { useEffect, useRef, useState } from "react"


function UseRefFrom() {
    const nameRef = useRef()
    const passwordRef = useRef();
    const [error, setError] = useState(false);

    useEffect(() => {
        passwordRef.current.focus();
    }, []);

    const handelSubmit = (e) => {
        e.preventDefault()
        const password = passwordRef.current.value;
        if (password.length >= 8) {
            setError(false);
            console.log(password);
        } else {
            setError(true);
        }

        console.log(nameRef.current.value);
    }


    return (
        <div>
            <form onSubmit={handelSubmit} className="space-y-2">
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input defaultValue={'tolha@gmail.com'} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <div>
                    {
                        error ? <div><small className="text-red-500 text-xs">Password Must be 8 Characters or longer !!</small></div> : null
                    }
                </div>
                <input type="submit" value="Submit" className="border p-2 rounded-xl px-4 bg-gray-800" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UseRefFrom
