import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
    
            <p className="flex gap-4 items-center"><FaCheckCircle className="text-green-500" /> {feature}</p>
        
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;