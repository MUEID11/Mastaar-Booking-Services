import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BiDollar } from "react-icons/bi";

const TodoService = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const getData = async () => {
    const { data } = await axiosSecure.get(`/todoservice/${user?.email}`);
    return data;
  };
  const {
    data: todos = [],
    isLoading,
    error,
    isError,
    refetch,
  } = useQuery({
    queryFn: async () => await getData(),
    queryKey: ["servicestodo"],
  });
  if (isLoading) {
    return (
      <div className="relative h-[65vh] flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-md absolute top-50 translate-y-5"></span>
      </div>
    );
  }
  if (isError || error) {
    return console.log(error, isError);
  }

  const handleStatusChange = async (id, newStatus) => {
    try {
      const { data } = await axiosSecure.patch(`/updatestatus/${id}`, {
        serviceStatus: newStatus,
      });
      console.log(data);
      refetch();
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };
  return (
    <section className="container px-4 mx-auto pt-12">
      <Helmet>
        <title>Services-To-Do</title>
      </Helmet>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium">Service-To-Do</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {todos.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              {
                todos.length > 0 ? <table className="min-w-full divide-y divide-gray-200">
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
                        <span>Brought By</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Date</span>
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
                      Requested Location
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {todos.map((todo) => (
                    <tr key={todo?._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {todo.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {todo.buyerEmail}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {new Date(todo.purchaseDate).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                       <span className="flex justify-center items-center"> {todo.price} <BiDollar/></span>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="px-3 py-1 rounded-full text-blue-700 bg-blue-100/60
                           text-xs"
                          >
                            {todo.location}
                          </p>
                        </div>
                      </td>
                      <td>
                        <select
                          value={todo.serviceStatus}
                          disabled={todo?.serviceStatus === "Completed"}
                          onChange={(e) =>
                            handleStatusChange(todo._id, e.target.value)
                          }
                        >
                          <option value="Pending">Pending</option>
                          <option value="Working">Working</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {todo?.serviceStatus === "Pending" ? (
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100 text-yellow-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-700"></span>
                            <h2 className="text-sm font-normal ">
                              {todo?.serviceStatus}
                            </h2>
                          </div>
                        ) : todo?.serviceStatus === "Working" ? (
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-100 text-blue-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-700"></span>
                            <h2 className="text-sm font-normal ">
                              {todo?.serviceStatus}
                            </h2>
                          </div>
                        ) : (
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-green-100 text-green-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
                            <h2 className="text-sm font-normal ">
                              {todo?.serviceStatus}
                            </h2>
                          </div>
                        )}
                      </td>

                      {/* <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() =>
                              handleStatus(
                                todo._id,
                                todo.serviceStatus,
                                "Accepted"
                              )
                            }
                            disabled={todo.serviceStatus === "Rejected"}
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
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() =>
                              handleStatus(
                                todo._id,
                                todo.serviceStatus,
                                "Rejected"
                              )
                            }
                            disabled={todo?.serviceStatus === "Accepted"}
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
                                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          </button>
                        </div>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table> : <div className="text-xl sm:text-2xl font-bold text-center">Add more services to get order, Foucusing on imporving your gig quality might help</div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoService;
