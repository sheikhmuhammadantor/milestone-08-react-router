/* eslint-disable react/prop-types */
import { FaRegCheckCircle } from "react-icons/fa";

const Features = ({feature}) => {
  return (
    <div className="pl-5 text-left">
        <h1 className="flex gap-2 items-center"><FaRegCheckCircle className="text-green-500"/>{feature}</h1>
    </div>
  )
}

export default Features
