export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Plan & Strategize",
      description:
        "Every great project starts with a solid plan. I work closely with clients to understand their goals, conduct thorough research, and create a detailed roadmap. This ensures we’re aligned from the start and sets the foundation for success",
    },
    {
      id: 2,
      title: "Build & Develop",
      description:
        "With a clear plan in place, I move into the build phase. I design intuitive interfaces, write clean and scalable code, and rigorously test every component to ensure a seamless user experience",
    },
    {
      id: 3,
      title: "Launch & Optimize",
      description:
        "Once the project is ready, I handle deployment and ensure everything runs smoothly. I also provide ongoing support and optimize performance to keep the project ahead of the curve",
    },
  ];
  return (
    <>
      <section id="process" className="py-10 sm:py-16 lg:py-24 bg-primary/5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              From Vision to
              <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/60 to-blue-500">
                Reality.
              </span>
            </h2>

            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-muted-foreground">
              Every great project starts with a clear vision and ends with a
              solution that delivers real value. Here’s how I make it happen
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <svg
                width="875"
                height="48"
                viewBox="0 0 875 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                  stroke="#D4D4D8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-dasharray="1 12"
                />
              </svg>
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-card border-2  rounded-full">
                  <span className="text-xl font-semibold text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      color=""
                      className="lucide lucide-chart-gantt text-primary"
                    >
                      <path d="M10 6h8" />
                      <path d="M12 16h6" />
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="M8 11h7" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-foreground md:mt-10">
                  Plan & Strategize
                </h3>
                <p className="mt-4 text-base text-muted-foreground">
                  Every great project starts with a solid plan , I work closely
                  with clients to understand their goals .
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-card border-2  rounded-full">
                  <span className="text-xl font-semibold text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-cog text-primary"
                    >
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M12 2v2" />
                      <path d="M12 22v-2" />
                      <path d="m17 20.66-1-1.73" />
                      <path d="M11 10.27 7 3.34" />
                      <path d="m20.66 17-1.73-1" />
                      <path d="m3.34 7 1.73 1" />
                      <path d="M14 12h8" />
                      <path d="M2 12h2" />
                      <path d="m20.66 7-1.73 1" />
                      <path d="m3.34 17 1.73-1" />
                      <path d="m17 3.34-1 1.73" />
                      <path d="m11 13.73-4 6.93" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-foreground md:mt-10">
                  Build & Develop
                </h3>
                <p className="mt-4 text-base text-muted-foreground">
                  With a clear plan in place, I move into the build phase , I
                  write clean and scalable code .
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-card border-2  rounded-full">
                  <span className="text-xl font-semibold text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-rocket  text-primary"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-foreground md:mt-10">
                  Release & Launch
                </h3>
                <p className="mt-4 text-base text-muted-foreground">
                  Once the project is ready, I handle deployment and ensure
                  everything runs smoothly .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
