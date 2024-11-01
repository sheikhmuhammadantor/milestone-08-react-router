import { useState } from "react";

function StateForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);

    const handelSubmit = (e) => {
        e.preventDefault()
        if (password.length >= 8) {
            setError(false);
            console.log(name, password);
        } else {
            setError(true);
        }
    }


    const handelNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handelPasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handelSubmit} className="space-y-2">
                <input onChange={handelNameChange} type="text" name="name" />
                <br />
                <input defaultValue={'tolha@gmail.com'} type="email" name="email" />
                <br />
                <input onChange={handelPasswordChange} type="password" name="password" />
                <br />
                <div>
                    {
                        error ? <div><small className="text-red-500 text-xs">Password Must be 8 Characters or longer !!</small></div> : ''
                    }
                </div>
                <input type="submit" value="Submit" className="border p-2 rounded-xl px-4 bg-gray-800" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default StateForm
