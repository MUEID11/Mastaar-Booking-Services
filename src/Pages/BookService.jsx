import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const BookService = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const getServices = async () => {
    const { data } = await axiosSecure.get(`/bookedservices/${user?.email}`);
    return data;
  };
  const {
    data: bookedservices = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => getServices(),
    queryKey: ["booked-services"],
  });
  if (isLoading) {
    return (
      <div className="relative h-[65vh] flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-md absolute top-50 translate-y-5"></span>
      </div>
    );
  }
  console.log(error, isError);
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <Helmet>
          <title>Booked Services</title>
        </Helmet>
        <h2 className="text-lg font-medium ">Booked services</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {bookedservices?.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              {bookedservices.length > 0 ? (
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
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Provider Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Email</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Purchese Date</span>
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
                        Booking request
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {bookedservices.map((bookedService) => (
                      <tr key={bookedService?._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {bookedService?.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {bookedService?.providerName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {bookedService?.providerEmail}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {new Date(
                            bookedService.purchaseDate
                          ).toLocaleDateString()}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {bookedService?.price}
                        </td>

                        {bookedService?.serviceStatus === "Pending" ? (
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-yellow-700"></span>
                              <h2 className="text-sm font-normal ">
                                {bookedService?.serviceStatus}
                              </h2>
                            </div>
                          </td>
                        ) : bookedService?.serviceStatus === "Working" ? (
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-100 text-blue-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-700"></span>
                            <h2 className="text-sm font-normal ">
                              {bookedService?.serviceStatus}
                            </h2>
                          </div>
                        ) : (
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-green-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
                              <h2 className="text-sm font-normal ">
                                {bookedService?.serviceStatus}
                              </h2>
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex items-center justify-center ">
                  Start your learning journey
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link to="/all" className="btn btn-sm my-6">
        Book Services
      </Link>
    </section>
  );
};

export default BookService;
