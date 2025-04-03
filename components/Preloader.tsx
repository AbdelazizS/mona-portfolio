import { useEffect } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  setLoading: (loading: boolean) => void;
}

// Array of greetings in different languages
const greetings = ["Hello", "سلام", "¡Hola", "Bonjour", "こんにちは"];

const Preloader: React.FC<PreloaderProps> = ({ setLoading }) => {
  useEffect(() => {
    // Create a GSAP timeline with an onComplete callback to disable the preloader
    const timeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    // Animate each greeting one by one
    greetings.forEach((_, index) => {
      timeline
        // Fade in the greeting
        .to(`.greeting-${index}`, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        // Hold for a moment before fading out
        .to(`.greeting-${index}`, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          delay: 0.4,
        });
    });

    // Slide the entire preloader upward to exit after greeting animations
    timeline.to(
      ".preloader",
      {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.5" // Overlap slightly for a smoother transition
    );
  }, [setLoading]);

  return (
    <div className="relative preloader top-0 left-0 w-full h-screen bg-gradient-to-b from-primary to-primary flex flex-col items-center justify-center ">
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-gray0 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [&>div]:bg-[size:14px_24px] [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] ">
          <div />
        </div>
      </div>
      <div className="relative h-12 w-full flex items-center justify-center">
        {greetings.map((greeting, index) => (
          <h1
            key={index}
            className={`greeting greeting-${index} absolute text-white text-4xl font-bold opacity-0`}
          >
            {greeting}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
