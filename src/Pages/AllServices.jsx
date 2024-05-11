
import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../Components/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allservices`
      );
      setServices(data);
    };
    getData();
  });
  return (
    <div className="container mx-auto my-12 p-4">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
