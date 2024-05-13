import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet";

const BookService = () => {
  const [bookedservices, setBookedServices] = useState([]);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    const getServices = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/bookedservices/${user?.email}`
      );
      setBookedServices(data);
      console.log(data);
    };
    getServices();
  }, [user]);
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <Helmet>
            <title>
                Booked Services
            </title>
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
                      Provider Name
                    </th>

                    {/* <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Status
                    </th> */}
                  </tr>
                </thead>
                <tbody className="">
                  {bookedservices.map((bookedService) => (
                    <tr key={bookedService._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {bookedService.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {bookedService.providerEmail}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {new Date(
                          bookedService.purchaseDate
                        ).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {bookedService.price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                             text-xs"
                          >
                            {bookedService.providerName}
                          </p>
                        </div>
                      </td>
                      {/* <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                            <h2 className="text-sm font-normal ">Pending</h2>
                          </div>
                        </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookService;
