import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <section className="flex text-2xl p-2 items-center gap-12 bg-yellow-500 rounded-lg text-white my-2">
        <div className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          {
            open ? <FaBars className=""></FaBars> : <IoClose className="text-4xl"></IoClose>
          }
        </div>
        <div>
          <ul className={`md:flex absolute md:static gap-5 font-semibold p-2 duration-200 ${open ? 'left-16 top-[120px]' : '-left-80'} bg-yellow-500 rounded-lg`}>
            <li className="border p-1 px-4 rounded-md mb-2 hover:bg-yellow-600 cursor-pointer">Home</li>
            <li className="border p-1 px-4 rounded-md mb-2 hover:bg-yellow-600 cursor-pointer">About</li>
            <li className="border p-1 px-4 rounded-md mb-2 hover:bg-yellow-600 cursor-pointer">Service</li>
            <li className="border p-1 px-4 rounded-md mb-2 hover:bg-yellow-600 cursor-pointer">Contact</li>
            <li className="border p-1 px-4 rounded-md mb-2 hover:bg-yellow-600 cursor-pointer">NotFound</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Navbar
