function SimpleForm() {

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.type);
        console.log(e.target.name.value);
        console.log(e.target.name.id);
        console.log(e.target.name.attributes.name);
        console.log(e);
    }

  return (
    <div>
        <form onSubmit={handelSubmit} className="space-y-2">
            <input type="text" defaultValue={'Tolha'} name="name"/>
            <br />
            <input type="email" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <input type="submit" value="Submit" className="border p-2 rounded-xl px-4 bg-gray-800"/>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SimpleForm
