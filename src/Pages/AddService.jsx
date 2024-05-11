function AddService() {
  return (
    <div className="p-4 bg-dark dark:text-white container mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-3xl font-bold mb-4">Add Service</h1>
        <p>
          Calling all educators, mentors, and experts! Share your knowledge and
          passion by adding your teaching services to our platform. Whether you
          specialize in academic subjects, professional skills, hobbies, or
          unique talents, your expertise is invaluable. Empower learners of all
          ages and backgrounds to grow, learn, and succeed. Together, let's
          build a diverse community of teachers dedicated to shaping minds,
          fostering growth, and making a positive impact. Join us in creating a
          brighter future through education and empowerment.
        </p>
      </div>
      <form>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="providerName"
            >
              Provider Name
            </label>
            <input
              required
              id="providerName"
              autoComplete="providerName"
              name="providerName"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="providerEmail"
            >
              Provider Email Address
            </label>
            <input
              required
              id="providerEmail"
              autoComplete="email"
              name="providerEmail"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="providerImage"
            >
              Provider Image URL
            </label>
            <input
              required
              id="providerImage"
              autoComplete="providerImage"
              name="providerImage"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="serviceName"
            >
              Service Name
            </label>
            <input
              required
              id="serviceName"
              autoComplete="serviceName"
              name="serviceName"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          <div className="mt-4 col-span-2">
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="providerImage"
              >
                Provider Image URL
              </label>
              <input
                required
                id="providerImage"
                autoComplete="providerImage"
                name="providerImage"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="price"
            >
              Price
            </label>
            <input
              required
              id="price"
              autoComplete="price"
              name="price"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="serviceArea"
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
          <div className="mt-4 col-span-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              required
              id="description"
              autoComplete="description"
              name="description"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              rows="4"
            ></textarea>
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
