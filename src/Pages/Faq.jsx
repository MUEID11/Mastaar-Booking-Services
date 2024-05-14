const Faq = () => {
  return (
    <div className="container mx-auto my-16">
      <section id="faq" className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-4xl font-bold sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600 text-center">
            Here are five frequently asked questions (FAQs) on our services
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="space-y-4"
          >
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                What types of teaching services do you offer?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Detail the range of teaching services you provide, including
                subjects, levels, and formats such as one-on-one tutoring, group
                classes, or online sessions.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                How do you ensure the quality of your teaching staff?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Explain your hiring process, qualifications required for
                instructors, and any ongoing training or professional
                development programs to maintain high teaching standards.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                Can I customize my learning experience?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Discuss flexibility in curriculum, scheduling, and learning
                goals to accommodate individual needs and preferences of
                students.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
                What is your teaching methodology?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Describe the pedagogical approach used in your teaching, whether
                it's inquiry-based learning, personalized instruction, or a
                blend of traditional and modern methods.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-semibold">
              How do I get started with your teaching services?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Provide information on the enrollment process, including how to schedule a consultation, assessment, or trial lesson, as well as any registration requirements or fees involved.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
