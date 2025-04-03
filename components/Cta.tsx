import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Cta() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="lg:py-14  p-10 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/40 to-primary/60 flex items-center justify-between flex-col lg:flex-row">
            <div className="block text-center mb-5 lg:text-left lg:mb-0">
              <h2 className="font-manrope text-4xl text-foreground font-bold mb-5 lg:mb-2">
                Build Your Next Project with Me
              </h2>
              <p className="text-xl text-foreground/40 max-w-2xl">
                I specialize in crafting robust, secure, and scalable Laravel
                backends.
              </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=0249129891773">
              <Button
                className="text-lg py-6 cursor-pointer"
                variant={"secondary"}
              >
                Launch Your Project Today
                <ArrowRight className="size-6" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
