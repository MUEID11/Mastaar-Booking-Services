import { useState } from "react";
import { FaDollarSign, FaRegHandPointRight } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ServiceDetails = () => {
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const getService = async () => {
    const { data } = await axiosSecure.get(`/service/${id}`);
    return data;
  };
  const { data: service = {}, isLoading } = useQuery({
    queryFn: async () => await getService(),
    queryKey: ["details"],
  });
  if (isLoading) {
    return (
      <div className="relative h-[65vh] flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-md absolute top-50 translate-y-5"></span>
      </div>
    );
  }
  const {
    _id,
    location,
    providerImage,
    imageUrl,
    description,
    providerName,
    providerEmail,
    name,
    price,
  } = service || {};
  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceId = form.serviceId.value;
    const imageUrl = form.imageUrl.value;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const name = form.serviceName.value;
    const price = form.price.value;
    const buyerEmail = form.currentUserEmail.value;
    const buyerName = form.currentUserName.value;
    const serviceStatus = "Pending";
    const purchaseDate = startDate;
    const location = form.serviceArea.value;
    if (user?.email === providerEmail) {
      toast.error(`You can't buy your own services`);
      closeModal();
      return;
    }

    const bookingData = {
      providerName,
      providerEmail,
      imageUrl,
      name,
      price,
      buyerName,
      serviceId,
      buyerEmail,
      serviceStatus,
      purchaseDate,
      location,
    };
    try {
      const { data } = await axiosSecure.post(`/bookservice`, bookingData);
      toast.success("Service Booking Successfull");
      closeModal();
      console.log(data);
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data)
      closeModal();
      }
  };

  return (
    <div>
      <section className=" dark:bg-gray-900">
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <h2 className="sm:text-4xl text-2xl font-bold text-center my-6">
          Service Details of: {name}
        </h2>
        <div className="container flex flex-col-reverse px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 mt-8">
            <div className="lg:max-w-lg">
              <h3 className="text-3xl font-semibold tracking-wide  dark:text-white lg:text-4xl mb-1">
                {name}
              </h3>
              <div className="flex items-center space-x-3 mt-4">
                <img
                  alt=""
                  className="size-8 sm:size-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100"
                  src={providerImage}
                />
                <div>
                  <h5 className="text-xl font-medium tracking-tight">
                    {providerName}
                  </h5>
                  <p>{providerEmail}</p>
                </div>
              </div>
              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2  dark:text-gray-200">
                  <FaRegHandPointRight className="text-blue-500 ml-2" />

                  <span className="mx-2">{description}</span>
                </p>

                <p className="flex items-center -mx-2  dark:text-gray-200">
                  <FaRegHandPointRight className="text-blue-500 ml-2" />
                  <span className="mx-2">Best toutoring service online</span>
                </p>
                <p className="flex items-center -mx-2  dark:text-gray-200">
                  <FaRegHandPointRight className="text-blue-500 ml-2" />
                  <span className="mx-2">
                    Flexible payment methods. Monthly | Yearly | Full Course
                  </span>
                </p>
                <p className="flex items-center -mx-2  dark:text-gray-200">
                  <FaRegHandPointRight className="text-blue-500 ml-2" />
                  <span className="mx-2">Location: {location}</span>
                </p>

                <p className="flex items-center -mx-2  dark:text-gray-200">
                  <FaRegHandPointRight className="text-blue-500 ml-2" />
                  <span className="mx-2 flex items-center">
                    Only {price} <FaDollarSign />
                  </span>
                </p>
              </div>
            </div>
            <div className="my-12 space-x-4">
              <Link to={"/all"} className="btn btn-sm ">
                <span className="relative">Explore Services</span>
              </Link>
              <Link onClick={openModal} className="btn btn-sm">
                <span className="relative">Book Now</span>
              </Link>
              {/* Render the modal component */}
              {isModalOpen && (
                <div className="fixed  inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                  <div className="relative w-full max-w-[600px] mx-auto my-2">
                    {/*content*/}
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                        <h3 className="text-xl font-semibold text-center">
                          Book Service
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={closeModal}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative flex-auto p-6">
                        <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Provider Name */}
                            <div className="mt-1">
                              <label
                                htmlFor="providerName"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Provider Name
                              </label>
                              <input
                                disabled
                                defaultValue={providerName}
                                id="providerName"
                                autoComplete="providerName"
                                name="providerName"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                              />
                            </div>
                            {/* Provider Email Address */}
                            <div className="mt-1">
                              <label
                                htmlFor="providerEmail"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Provider Email Address
                              </label>
                              <input
                                disabled
                                defaultValue={providerEmail}
                                id="providerEmail"
                                autoComplete="email"
                                name="providerEmail"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                              />
                            </div>
                            {/* Provider Image URL */}
                            <div className="mt-1">
                              <label
                                htmlFor="providerImage"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Service Image URL
                              </label>
                              <input
                                disabled
                                defaultValue={imageUrl}
                                id="imageUrl"
                                autoComplete="imageUrl"
                                name="imageUrl"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                              />
                            </div>
                            {/* Service Name */}
                            <div className="mt-1">
                              <label
                                htmlFor="serviceName"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Service Name
                              </label>
                              <input
                                defaultValue={name}
                                disabled
                                id="serviceName"
                                autoComplete="serviceName"
                                name="serviceName"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                              />
                            </div>
                            {/* Price */}
                            <div className="mt-1">
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Price
                              </label>
                              <input
                                defaultValue={price}
                                disabled
                                id="price"
                                autoComplete="price"
                                name="price"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                              />
                            </div>
                            {/* Current User Name */}
                            <div className="mt-1">
                              <label
                                htmlFor="currentUserName"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Current User Name
                              </label>
                              <input
                                disabled
                                defaultValue={user?.displayName}
                                id="currentUserName"
                                autoComplete="currentUserName"
                                name="currentUserName"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                              />
                            </div>
                            {/* Service ID */}
                            <div className="mt-1">
                              <label
                                htmlFor="serviceId"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Service ID
                              </label>
                              <input
                                disabled
                                defaultValue={_id}
                                id="serviceId"
                                autoComplete="serviceId"
                                name="serviceId"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                              />
                            </div>
                            {/* Current User email */}
                            <div className="mt-1">
                              <label
                                htmlFor="currentUserEmail"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Current User Email
                              </label>
                              <input
                                disabled
                                defaultValue={user?.email}
                                id="currentUserEmail"
                                autoComplete="email"
                                name="currentUserEmail"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                              />
                            </div>
                            {/* Service Area */}
                            <div className="mt-1">
                              <label
                                htmlFor="serviceArea"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Service Area
                              </label>
                              <input
                                required
                                id="serviceArea"
                                autoComplete="serviceArea"
                                name="serviceArea"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                              />
                            </div>
                            {/* Service Taking Date */}
                            <div className="mt-1">
                              <label
                                htmlFor="serviceDate"
                                className="block text-sm font-medium text-gray-600"
                              >
                                Service Taking Date
                              </label>
                              <DatePicker
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-end p-2 border-t border-solid rounded-b border-blueGray-200 mt-2">
                            <button
                              className="btn btn-md text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4"
                              onClick={closeModal}
                            >
                              Close
                            </button>
                            <button
                              className="btn btn-md text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                              type="submit"
                            >
                              Purchase
                            </button>
                          </div>
                        </form>
                      </div>
                      {/*footer*/}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src={imageUrl}
              alt="sevice photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
