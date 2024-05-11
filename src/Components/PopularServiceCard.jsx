import React from "react";
import { FaArrowRight, FaDollarSign } from "react-icons/fa6";

const PopularServiceCard = ({ service }) => {
  const {
    _id,
    providerImage,
    imageUrl,
    description,
    providerName,
    name,
    price,
  } = service;
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
          <p className="text-sm dark:text-gray-600">{description}</p>
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
            <button type="button" className="flex items-center p-1 space-x-1.5">
              View Details
              <span className="ml-2">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
