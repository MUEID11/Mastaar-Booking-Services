const Testimonial = () => {
  return (
    <div>
      <section className=" dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="flex-col mx-auto">
              <h1 className="text-2xl font-semibold  capitalize lg:text-3xl dark:text-white">
                What our clients are saying
              </h1>

              <div className="flex mx-auto mt-6 space-x-2">
                <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-24 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-12 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-2 h-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “I can't thank [Mastaar] enough for their outstanding
                tutoring service. My grades have improved significantly since I
                started sessions with them. The tutor's expertise, patience, and
                encouragement have made learning enjoyable and rewarding.
                Whether it's math, science, or language arts, they have a tutor
                for every subject. Highly recommended for anyone seeking
                academic success!”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold  dark:text-white">Robert</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
              <p className="leading-loose text-white">
                “As a busy professional preparing for a certification exam, I
                was struggling to find time to study effectively. [Mastarr] came to my rescue with their flexible online tutoring
                options. The tutor provided tailored study plans, insightful
                explanations, and valuable exam tips that boosted my confidence
                and helped me ace the exam. Thank you for your exceptional
                service”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-white">Jeny Doe</h1>
                  <span className="text-sm text-blue-200">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Enrolling in [Mastaar] tutoring sessions was one of the best
                decisions I made for my child's education. The personalized
                attention and expert guidance helped my child not only improve
                academically but also gain confidence in their abilities. The
                tutors are not only knowledgeable but also caring and
                supportive. Highly recommend!”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold  dark:text-white">
                    Ema Watson{" "}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
