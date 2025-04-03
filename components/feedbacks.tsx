import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <>
      {/* <!-- Testimonials Section: Large Photo --> */}

      <div id="testimonials" className="overflow-hidden bg-gradient bg-gradient-to-br from-primary/45 via-primary/70 to-primary/90">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((item) => (
                <CarouselItem>
                  <div className="flex flex-col items-center gap-16 md:flex-row">
                    <div className="max-auto relative w-2/3 p-6 md:w-1/4">
                      <div className="absolute inset-0 m-6 -rotate-6 rounded-lg bg-white/10 shadow-lg"></div>
                      <img
                        src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-600x800.jpg"
                        className="relative rounded-lg"
                        alt="User Photo"
                      />
                    </div>
                    <div className="relative md:w-3/4">
                      <div className="absolute top-0 right-0 -mt-5 font-serif text-9xl text-white/20 opacity-75 sm:-mt-10">
                        “
                      </div>
                      <div className="mb-3">
                        <div className="inline-flex items-center rounded-lg bg-black/20 px-2 py-1 text-yellow-400">
                          {[1, 2, 3, 4, 5].map((item) => (
                            <svg
                              key={item}
                              className="hi-mini hi-star inline-block size-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <blockquote>
                        <p className="mb-5 text-lg leading-8 font-medium text-white">
                          I’ve been using pixelcave themes for years. The code
                          is consistently high-quality and pleasant to work
                          with, so I highly recommended them.
                        </p>
                        <footer>
                          <a
                            href="javascript:void(0)"
                            className="text-lg font-semibold text-white/90 hover:text-white/75"
                          >
                            John Smith
                          </a>
                          <p className="text-sm font-medium text-white/50">
                            CEO and Founder
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {/* <!-- END Testimonials Section: Large Photo --> */}
    </>
  );
}
