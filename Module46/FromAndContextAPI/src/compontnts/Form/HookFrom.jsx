import useInputState from "../Hook/useInputState";
import useInputStateObj from "../Hook/useInputStateObj";

function HookFrom() {

    const [name, handelSetName] = useInputState()
    const [password, handelSetPassword] = useInputState()
    const phoneState = useInputStateObj();

    const handelNameChange = (e) => {
        handelSetName(e.target.value);
    }

    const handelPasswordChange = (e) => {
        handelSetPassword(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(name);
        console.log(phoneState.data);
        console.log(password);
    }

    return (
        <div>
            <form onSubmit={handelSubmit} className="space-y-2">
                <input onChange={handelNameChange} type="text" name="name" />
                <br />
                <input {...phoneState} type="text" name="phone" />
                <br />
                <input defaultValue={'tolha@gmail.com'} type="email" name="email" />
                <br />
                <input onChange={handelPasswordChange} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" className="border p-2 rounded-xl px-4 bg-gray-800" />
                <br />
                <button type="submit">Submit</button>
                <div>
                    {name && <p>Name : {name}</p>}
                    {phoneState.data && <p>Phone : {phoneState.data}</p>}
                    {password && <p>Password : {password}</p>}
                </div>
            </form>
        </div>
    )
}

export default HookFrom
