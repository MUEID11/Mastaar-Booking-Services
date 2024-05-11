
import Slider from "../Components/Slider";
import PopularServices from "./PopularServices";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
    const {loading} = useAuth();
   const [services, setServices] = useState([]);
   useEffect(()=>{
    const getServices = async () => {
        const {data} =  await axios.get(`${import.meta.env.VITE_API_URL}/services`)
        setServices(data);
    }
    getServices();
   },[])
    console.log(services)
    if (loading) {
        return (
          <div className="relative h-[65vh] flex items-center justify-center">
            <span className="loading loading-spinner text-primary loading-md absolute top-50 translate-y-5"></span>
          </div>
        );
      }else return (
        <div className="container mx-auto my-16">
            <Slider services={services}/>
            <PopularServices services={services}/>
        </div>
    );
};

export default Home;