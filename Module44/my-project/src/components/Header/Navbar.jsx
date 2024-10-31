import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <h1>IM From Nav...!</h1>
      <section className="flex text-2xl items-center gap-12">
        <div className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          {
            open ? <FaBars className=""></FaBars> : <IoClose className="text-4xl"></IoClose>
          }
        </div>
        <div>
          <ul className={`md:flex absolute md:static gap-5 font-semibold p-2 duration-200 ${open ? 'left-16' : '-left-80'}`}>
            <li className="border p-1 px-4 rounded-md mb-2">Home</li>
            <li className="border p-1 px-4 rounded-md mb-2">About</li>
            <li className="border p-1 px-4 rounded-md mb-2">Service</li>
            <li className="border p-1 px-4 rounded-md mb-2">Contact</li>
            <li className="border p-1 px-4 rounded-md mb-2">NotFound</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Navbar
