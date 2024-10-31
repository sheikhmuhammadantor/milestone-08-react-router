import PriceOption from "./PriceOption"


function PriceOptions() {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Group fitness classes",
            "Locker room facilities",
            "Free Wi-Fi",
            "Monthly fitness assessment",
            "Access to gym app for tracking workouts"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "All Basic Membership features",
            "Unlimited group fitness classes",
            "Personal training session (1/month)",
            "Discounts on workshops and events",
            "Access to specialized classes (yoga, Pilates)",
            "Priority booking for classes",
            "Nutrition guides and meal plans"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79.99,
          "features": [
            "All Standard Membership features",
            "24/7 gym access",
            "Unlimited personal training sessions",
            "Nutrition consultation",
            "Free guest passes (2/month)",
            "Access to premium workout equipment",
            "Wellness workshops and seminars",
            "Body composition analysis"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 99.99,
          "features": [
            "All Premium Membership features for up to 4 family members",
            "Family group fitness classes",
            "Kids' club access",
            "Family nutrition workshops",
            "Monthly family fitness challenges",
            "Access to swimming pool (if available)",
            "Discounts on merchandise"
          ]
        }
      ]
      

  return (
    <div>
      <h1 className="text-4xl text-blue-500">Best Price in the Town ..!</h1>
        <div className="grid grid-cols-2 justify-center gap-5 my-4">
            {
                priceOptions.map((priceOption) => <PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>)
            }
        </div>
    </div>
  )
}

export default PriceOptions
