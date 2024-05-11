import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import PopularServices from "./PopularServices";


const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div className="container mx-auto my-16">
            <Slider services={services}/>
            <PopularServices services={services}/>
        </div>
    );
};

export default Home;