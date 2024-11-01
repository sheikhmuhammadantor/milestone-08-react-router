/* eslint-disable react/prop-types */
const ReusableFrom = ({formTitle, submitBtnText="Submit", handelSubmitBtn, children}) => {

    const handelLocalSubmit = (e) => {
        e.preventDefault()
        const obj = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handelSubmitBtn(obj);
        
        console.log(children);
    }

    return (
        <div>
            <h2 className="text-2xl mb-3">{formTitle}</h2>
            {children}
            <form onSubmit={handelLocalSubmit} className="space-y-2">
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} className="border p-2 rounded-xl px-4 bg-gray-800" />
                <br />
                <button type="submit">{submitBtnText}</button>
            </form>
        </div>
    )
}

export default ReusableFrom
