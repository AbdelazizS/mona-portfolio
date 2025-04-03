interface Logo {
    name: string;
    logo: string;
    className: string;
  }
  
  interface Logos8Props {
    title?: string;
    subtitle?: string;
    logos?: Logo[];
  }
  
  const Logos = ({
    title = "Trusted by these companies",
    subtitle = "collaborations with various companies to deliver customized backend and web solutions",
    logos = [
      {
        name: "Vercel",
        logo: "/etoo.png",
        className: "h-16 w-auto bg-white rounded-sm",
      },
      {
        name: "Astro",
        logo: "unicef.png",
        className: "h-16 w-auto  px-1",
      },
    //   {
    //     name: "Supabase",
    //     logo: "https://shadcnblocks.com/images/block/logos/supabase-wordmark.svg",
    //     className: "h-6 w-auto",
    //   },
    //   {
    //     name: "Figma",
    //     logo: "https://shadcnblocks.com/images/block/logos/figma-wordmark.svg",
    //     className: "h-5 w-auto",
    //   },
      {
        name: "Astro",
        logo: "/elitecare.png",
        className: "h-24 w-auto",
      },
    ],
  }: Logos8Props) => {
    return (
      <section className="pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold">{title}</h2>
            {/* <p className="mt-1 text-muted-foreground">{subtitle}</p> */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  width={109}
                  height={48}
                  className={logo.className}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Logos;
  