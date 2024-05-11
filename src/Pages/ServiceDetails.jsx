import { FaRegHandPointRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <div>
      <section className=" dark:bg-gray-900">
        <div className="container flex flex-col-reverse px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide  dark:text-white lg:text-4xl">
                Easiest way to create your website
              </h1>

              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2  dark:text-gray-200">
                  <FaRegHandPointRight className="text-blue-500 ml-2" />

                  <span className="mx-2">Clean and Simple Layout</span>
                </p>

                <p className="flex items-center -mx-2  dark:text-gray-200">
                  <FaRegHandPointRight className="text-blue-500 ml-2" />
                  <span className="mx-2">Just Copy Paste Codeing</span>
                </p>

                <p className="flex items-center -mx-2  dark:text-gray-200">
                  <FaRegHandPointRight className="text-blue-500 ml-2" />
                  <span className="mx-2">Easy to Use</span>
                </p>
              </div>
            </div>
            <div className="my-12">
              <Link
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">Book Now</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
