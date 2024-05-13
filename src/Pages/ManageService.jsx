import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

import { RiPresentationLine } from "react-icons/ri";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ManageService = () => {
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  const { user } = useAuth();

  //tanstack
  const getServices = async () => {
    const { data } = await axiosSecure(`/serviceprovider/${user?.email}`);
    return data;
  };
  const {
    data: services = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryFn: async() =>await getServices(),
    queryKey: ["manage-services", user?.email],
  });
  if (isLoading) {
    return (
      <div className="relative h-[65vh] flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-md absolute top-50 translate-y-5"></span>
      </div>
    );
  }
  if(isError || error) {
    return console.log(error, isError)
  }
  //   useEffect(() => {
  //     getServices();
  //   }, [user]);


  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        console.log(result);
        if (result.isConfirmed) {
          try {
            const { data } = await axiosSecure.delete(`/delete/${id}`);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          } catch (err) {
            console.log(err);
            toast.error(err.message);
          }
          closeModal();
          toast.success("Deleted successfully");
          refetch();
          //or we can use queryClient.invalidateQuieries({queryKey: ['manage-services']})
        }
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const providerImage = form.providerImage.value;
    const name = form.serviceName.value;
    const imageUrl = form.serviceImage.value;
    const location = form.location.value;
    const description = form.description.value;
    const price = form.price.value;
    const serviceData = {
      providerName,
      providerEmail,
      providerImage,
      name,
      price,
      imageUrl,
      location,
      description,
    };
    try {
      const { data } = await axiosSecure.put(`/update/${id}`, serviceData);
      console.log(data);
      toast.success("Service Updated Succesfully");
      refetch();
      closeModal();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  console.log(services);
  return (
    <section className="container px-4 mx-auto pt-12">
      <Helmet>
        <title>Manage Services</title>
      </Helmet>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium ">
          Services you are providing
        </h2>

        <span className="flex items-center px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          <RiPresentationLine className="mr-2" />
          {services.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Description
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {services.map((service) => (
                    <tr key={service?._id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-500  whitespace-nowrap">
                        {service?.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {service?.price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                               text-xs"
                          >
                            {service?.location}
                          </p>
                        </div>
                      </td>
                      <td
                        title={service?.description}
                        className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                      >
                        {service?.description.substring(0, 50)}. . .
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => handleDelete(service._id)}
                            className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={openModal}
                            className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Render the modal component */}
      {isModalOpen && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full max-w-[600px] mx-auto my-2">
            {/*content*/}
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="text-xl font-semibold text-center">
                  Update Service
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
                {services.map((service) => (
                  <form
                    onSubmit={(e) => handleSubmit(e, service?._id)}
                    key={service?._id}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mt-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-600"
                          htmlFor="providerName"
                        >
                          Provider Name
                        </label>
                        <input
                          required
                          defaultValue={user?.displayName}
                          id="providerName"
                          autoComplete="providerName"
                          name="providerName"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                          type="text"
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-600"
                          htmlFor="providerEmail"
                        >
                          Provider Email Address
                        </label>
                        <input
                          required
                          defaultValue={user?.email}
                          disabled
                          id="providerEmail"
                          autoComplete="email"
                          name="providerEmail"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                          type="email"
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-600"
                          htmlFor="providerImage"
                        >
                          Provider Image URL
                        </label>
                        <input
                          required
                          defaultValue={user?.photoURL}
                          disabled
                          id="providerImage"
                          autoComplete="providerImage"
                          name="providerImage"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                          type="text"
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-600"
                          htmlFor="serviceName"
                        >
                          Service Name
                        </label>
                        <input
                          required
                          defaultValue={service?.name}
                          id="serviceName"
                          autoComplete="serviceName"
                          name="serviceName"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                          type="text"
                        />
                      </div>
                      <div className="mt-2 col-span-2">
                        <div className="mt-2">
                          <label
                            className="block mb-2 text-sm font-medium text-gray-600"
                            htmlFor="serviceImage"
                          >
                            Service Image URL
                          </label>
                          <input
                            required
                            defaultValue={service?.imageUrl}
                            id="serviceImage"
                            autoComplete="serviceImage"
                            name="serviceImage"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-600"
                          htmlFor="price"
                        >
                          Price
                        </label>
                        <input
                          required
                          defaultValue={service?.price}
                          id="price"
                          autoComplete="price"
                          name="price"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                          type="number"
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-600"
                          htmlFor="location"
                        >
                          Service Location
                        </label>
                        <input
                          required
                          defaultValue={service?.location}
                          id="location"
                          autoComplete="location"
                          name="location"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                          type="text"
                        />
                      </div>
                      <div className="mt-2 col-span-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-600"
                          htmlFor="description"
                        >
                          Description
                        </label>
                        <textarea
                          required
                          defaultValue={service?.description}
                          id="description"
                          autoComplete="description"
                          name="description"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                          rows="2"
                        ></textarea>
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
                        Update
                      </button>
                    </div>
                  </form>
                ))}
              </div>
              {/*footer*/}
            </div>
          </div>
        </div>
      )}
      <Link to="/add" className="btn btn-sm my-6">Add services</Link>
    </section>
  );
};

export default ManageService;
