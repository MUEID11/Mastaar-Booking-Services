import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";

const Teachers = () => {
    const {user} = useAuth();
    const getData = async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/teacher`,
        );
        return data;
      };
      const { data: services = [], isLoading } = useQuery({
        queryFn: async () => await getData(),
        queryKey: ["teacherservices", user?.email],
      });
      if (isLoading) {
        return (
          <div className="relative h-[65vh] flex items-center justify-center">
            <span className="loading loading-spinner text-primary loading-md absolute top-50 translate-y-5"></span>
          </div>
        );
      }
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold leading-none sm:text-5xl">
              Meet our teachers
            </h3>
            <p className="max-w-2xl mx-auto dark:text-gray-600">
            Teachers illuminate paths to discovery, instilling values and igniting imaginations. Their impact transcends the classroom, shaping generations and leaving an indelible mark on society.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service?._id} className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 w-40 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src={service?.providerImage}
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">{service?.providerName}</h4>
                  <p className="text-sm dark:text-gray-600">{service?.name}</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Twitter"
                      className="dark:text-gray-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="LinkedIn"
                      className="dark:text-gray-600"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      title="Instagram"
                      className="dark:text-gray-600"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
