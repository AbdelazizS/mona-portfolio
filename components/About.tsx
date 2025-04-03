import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="about" className="py-10 sm:py-16 lg:py-24 ">
        {/* sm:px-6 lg:px-8 */}
        <div className="max-w-7xl px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
              <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Hi, I’m a passionate backend developer with expertise in
                building scalable, secure, and efficient server-side
                applications. I specialize in technologies like Node.js, Python,
                Django, and databases such as PostgreSQL and MongoDB. I love
                solving complex problems and optimizing systems for performance.
              </p>
              <p className="text-muted-foreground mb-6">
                With over 5 years of experience, I’ve worked on various
                projects, from RESTful APIs to microservices architecture. I’m
                always eager to learn new technologies and collaborate with
                teams to deliver high-quality solutions.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8 my-8">
                <div className="bg-card p-6 rounded-2xl shadow border">
                  <div className="flex flex-col gap-5">
                    <div className="font-manrope text-2xl font-bold text-primary">
                      25+
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl text-foreground font-semibold mb-2">
                        Projects Delivered
                      </h4>
                      <p className="text-xs text-muted-foreground leading-5">
                        Each one a unique challenge mastered. From high-traffic
                        APIs to mission-critical databases, I’ve architected
                        solutions that don’t just meet specs—they set new
                        standards for reliability
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-2xl  shadow border">
                  <div className="flex flex-col gap-5">
                    <div className="font-manrope text-2xl font-bold text-primary">
                      100%
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl text-foreground font-semibold mb-2">
                        Scalability, Security & Efficiency
                      </h4>
                      <p className="text-xs text-muted-foreground leading-5">
                        Scalability that handles exponential growth. Security
                        engineered into every layer. Efficiency that eliminates
                        waste without cutting corners. I treat these as absolute
                        requirements,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative ps-16 md:px-0">
              <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                <img
                  className="ml-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                  alt=""
                />

                <img
                  className="absolute -top-4 -left-12"
                  src="./wave.svg"
                  alt=""
                />

                <div className="absolute -bottom-10 -left-16">
                  <div className="bg-card border shadow ">
                    <div className="p-4 space-y-4">
                      <li className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-3.5 h-3.5 text-white"
                          >
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                          </svg>
                        </div>
                        <span className="md:text-lg font-medium text-foreground">
                          Optimized Backend Architecture
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <span className="md:text-lg font-medium text-foreground">
                          CI/CD Pipeline Implementation
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-3.5 h-3.5 text-white"
                          >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        </div>
                        <span className="md:text-lg font-medium text-foreground">
                          Data Security & Encryption
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default About;
