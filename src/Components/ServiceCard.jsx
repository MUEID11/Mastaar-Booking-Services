import { FaArrowRight, FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    _id,
    providerImage,
    imageUrl,
    description,
    providerName,
    name,
    price,
  } = service || {};
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
          <img
            alt=""
            src={providerImage}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {providerName}
            </a>
            <span className="text-xs dark:text-gray-600">4 hours ago</span>
          </div>
        </div>
        <div>
          <img
            src={imageUrl}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{name}</h2>
          <p title={description} className="text-sm dark:text-gray-600">
            {description.substring(0, 50)} . . .
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center font-bold flex items-center"
            >
              <span className="mr-2 "> Price:</span>
              <FaDollarSign /> {price}
            </button>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <Link
              to={`/servicedetails/${_id}`}
              href="#_"
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                <span className="flex items-center p-1">
                  {" "}
                  View Details
                  <FaArrowRight className="ml-2" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
