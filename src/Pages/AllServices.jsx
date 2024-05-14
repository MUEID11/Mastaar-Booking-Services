import ServiceCard from "../Components/ServiceCard";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";

const AllServices = () => {
  const { user } = useAuth();
  const [searchText, setSearchText] = useState('')
  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allservices`,
      { params: { search: searchText } }
    );
    return data;
  };
  const { data: services = [], isLoading ,refetch} = useQuery({
    queryFn: async () => await getData(),
    queryKey: ["all-services", user?.email,],
  });
  if (isLoading) {
    return (
      <div className="relative h-[65vh] flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-md absolute top-50 translate-y-5"></span>
      </div>
    );
  }
  //   const [services, setServices] = useState([]);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const { data } = await axios.get(
  //         `${import.meta.env.VITE_API_URL}/allservices`
  //       );
  //       setServices(data);
  //     };
  //     getData();
  //   },[]);
  const handleSearch = async(e) => {
    e.preventDefault();
    console.log("Search text:", searchText);
    setSearchText(searchText);
    await refetch()
  };
  const handleReset =async()=> {
    setSearchText('');
    refetch("services")
  }
  return (
    <div className="container mx-auto my-12 p-4">
      <Helmet>
        <title>All services</title>
      </Helmet>
      <div className="text-center mt-2 mb-12 space-y-6">
        <h2 className="text-xl sm:text-4xl font-bold">
          Comprehensive Educational Services
        </h2>
        <p>
          Discover a wide range of educational services tailored to meet your
          needs and goals. From tutoring and skill development to language
          learning and exam preparation, our comprehensive educational services
          offer personalized support and guidance to help you succeed
          academically and professionally. With expert instructors, flexible
          scheduling, and innovative programs, we're here to help you unlock
          your full potential and achieve your aspirations.
        </p>
        <form>
          <div className="flex mx-auto p-1 justify-center overflow-hidden border rounded-lg w-80  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) =>setSearchText(e.target.value)}
                value = {searchText}
              name="search"
              placeholder="Enter Service Title"
              aria-label="Enter Service Title"
            />

            <button onClick={handleSearch} className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <button onClick={handleReset} className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              View all
            </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
