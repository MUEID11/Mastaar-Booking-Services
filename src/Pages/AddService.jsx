import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../Hooks/useAxiosSecure";

function AddService() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleFormSubmit = async (e) => {
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
      imageUrl,
      location,
      description,
      price,
    };
    try {
      const { data } = await axiosSecure.post(`/addservices`, serviceData);
      console.table(data);
      toast.success("Service posted successfully");
      navigate("/manage");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="p-4 bg-dark dark:text-white container mx-auto">
      <Helmet>
        <title>Add Services</title>
      </Helmet>
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-3xl font-bold mb-4">Add Service</h1>
        <p>
          Calling all educators, mentors, and experts! Share your knowledge and
          passion by adding your teaching services to our platform. Whether you
          specialize in academic subjects, professional skills, hobbies, or
          unique talents, your expertise is invaluable. Empower learners of all
          ages and backgrounds to grow, learn, and succeed. Together.
        </p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              required
              disabled
              defaultValue={user?.displayName}
              id="providerName"
              type="text"
              name="name"
              className="w-full   dark:bg-gray-800 rounded-md p-2 bg-gray-100  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="userEmail">User Email</label>
            <input
              required
              defaultValue={user?.email}
              disabled
              id="providerEmail"
              name="providerEmail"
              type="email"
              className="w-full  dark:bg-gray-800 rounded-md p-2 bg-gray-100  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="photo">Image URL</label>
            <input
              required
              defaultValue={user?.photoURL}
              disabled
              id="providerImage"
              name="providerImage"
              type="text"
              className="w-full  dark:bg-gray-800 rounded-md p-2 bg-gray-100  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="serviceName">Service Name</label>
            <input
              required
              type="text"
              id="serviceName"
              name="serviceName"
              className="w-full   rounded-md p-2 bg-gray-100 dark:bg-gray-800 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="serviceImage">Service Image Url </label>
            <input
              required
              type="text"
              id="serviceImage"
              name="serviceImage"
              className="w-full   rounded-md p-2 bg-gray-100 dark:bg-gray-800 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              required
              type="number"
              id="price"
              name="price"
              className="w-full   rounded-md p-2 bg-gray-100 dark:bg-gray-800 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="location">Service Location</label>
            <input
              required
              type="text"
              id="location"
              name="location"
              className="w-full   rounded-md p-2 bg-gray-100 dark:bg-gray-800 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

         
          <div>
            <label htmlFor="shortDescription">Short Description</label>
            <input
              required
              id="description"
              name="description"
              className="w-full row-span-1 rounded-md p-2  bg-gray-100 dark:bg-gray-800 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            ></input>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-blue-50 capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddService;
