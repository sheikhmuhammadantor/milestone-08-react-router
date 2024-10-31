import Features from "./Features";

/* eslint-disable react/prop-types */
const PriceOption = ({priceOption}) => {
    const {price, name, features} = priceOption;
  return (
    <div className="border flex flex-col gap-2 py-4 rounded-lg bg-cyan-950 px-5">
        <h1 className="text-5xl font-bold">{price}<span className="text-sm font-medium">/mon</span></h1>
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="flex-grow">
            {
                features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
            }
        </div>
        <button className="btn mx-auto mt-8 w-full text-xl">Buy Now</button>
    </div>
  )
}

export default PriceOption
