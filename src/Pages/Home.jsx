import Slider from "../Components/Slider";
import PopularServices from "./PopularServices";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import Teachers from "./Teachers";

const Home = () => {
    const {user} = useAuth();
  const getServices = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/services`
    );
    return data;
  };
  const {
    data: services = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => await getServices(),
    queryKey: ["limited-services", user?.email],
  });

  console.log(isError, error);
  if (isLoading) {
    return (
      <div className="relative h-[65vh] flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-md absolute top-50 translate-y-5"></span>
      </div>
    );
  } else
    return (
      <div className="container mx-auto my-16">
        <Slider services={services} />
        <PopularServices services={services} />
        <Teachers/>
      </div>
    );
};

export default Home;
