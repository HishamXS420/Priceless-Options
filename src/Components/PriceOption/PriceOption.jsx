import PropTypes from "prop-types";
import Feature from "./Feature/Feature";

const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className="bg-indigo-600 rounded-xl p-4 text-white flex flex-col justify-between text-center">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">$/mon </span>
                </h2>
                <h4 className="text-3xl text-amber-200 my-4">{name}</h4>
                <div className="mt-8 pl-8 flex-grow">
                    {/* list গুলোতে flex-grow দিলে flex-col এর মাধ্যমে col বরাবঅর যতটুকু সম্ভব নিচে যাবে বা grow করবে, তাই flex-grow ব্যবহার হলো */}
                {
                    features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>    )
                }
                
                </div>
                <button className="align-text-bottom h-20 w-full p-2 px-4 mt-12 bg-green-600 text-white font-semibold rounded-2xl text-3xl hover:bg-green-700">Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;