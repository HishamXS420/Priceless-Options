import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": 20,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym hours",
            "Cardio machines",
            "Strength training area",
            "Water refill station access"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 40,
          "currency": "USD",
          "features": [
            "Everything in Basic",
            "Group fitness classes",
            "Sauna access",
            "Personal trainer consultation (once per month)",
            "Yoga and stretching area",
            "Discount on gym merchandise",
            "Access to indoor cycling classes"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 60,
          "currency": "USD",
          "features": [
            "Everything in Standard",
            "Unlimited personal training sessions",
            "Nutritional guidance",
            "Priority booking for classes",
            "Guest pass (5 per month)",
            "Access to swimming pool",
            "Towel service",
            "Free Wi-Fi",
            "Hydro-massage chairs"
          ]
        },
        {
          "id": 4,
          "name": "Elite",
          "price": 100,
          "currency": "USD",
          "features": [
            "Everything in Premium",
            "Private locker",
            "24/7 gym access",
            "Exclusive VIP classes",
            "Customized workout and diet plan",
            "Spa and relaxation lounge access",
            "Physiotherapy sessions",
            "Private shower and changing rooms",
            "Free gym apparel (once per year)"
          ]
        },
        {
          "id": 5,
          "name": "Platinum",
          "price": 150,
          "currency": "USD",
          "features": [
            "Everything in Elite",
            "One-on-one personal coaching",
            "Cryotherapy sessions",
            "Exclusive rooftop workout area",
            "Access to VIP networking events",
            "Complimentary healthy snacks and drinks",
            "Advanced body composition analysis",
            "Monthly sports massage session"
          ]
        },
        {
          "id": 6,
          "name": "Diamond",
          "price": 200,
          "currency": "USD",
          "features": [
            "Everything in Platinum",
            "Personalized fitness concierge",
            "Unlimited spa treatments",
            "Custom supplement plan",
            "Private one-on-one yoga and meditation",
            "Executive business lounge access",
            "Premium valet parking",
            "Personalized workout gear",
            "24/7 VIP gym access"
          ]
        }
      ]
      

    return (
        <div class="m-12">
            <h2 className="text-5xl text-center mb-14 font-bold">Best Prices in the town
            </h2>
            <div className="grid lg:grid-cols-3 gap-6 my-4 md:grid-cols-2 sm:grid-cols-1">
            {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
               
          
        </div>
    );
};

export default PriceOptions;