import { Link } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";

const PopularServices = ({ services }) => {
  return (
    <div className="container mx-auto mt-8 sm:mt-20 p-4">
      <div className="text-center space-y-4">
        <h2 className="text-xl sm:text-3xl font-bold">Popular Services</h2>
        <p className="max-w-2xl mx-auto dark:text-gray-600" >
          Teaching Services of Mastaar works closely with your child’s school to{" "}
          provide an inclusive and equitable instrumental tuition program
          and welcome you as you embark upon this journey with us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-6">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>
        ))}
      </div>
      <div className="flex items-center justify-center mt-20">
        <Link
          to="/all"
          href="#_"
          className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            View All
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
