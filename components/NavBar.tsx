"use client";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";

const Navbar5 = () => {
  const features = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "My Process",
      href: "#process",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="border-b border fixed w-full bg-background shadow z-[100]">
      <div className="relative max-w-7xl mx-auto flex overflow-hidden p-4 flex-row items-center justify-between">
        <div className="flex items-center whitespace-nowrap text-2xl font-bold">
          <Link href="/">
            <span className="">
              {/* <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" /> */}
            </span>
            Mona.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/70 to-primary">
              dev
            </span>
          </Link>
        </div>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex w-full items-center gap-4">
            {features.map((feature, index) => (
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={feature.href}
                  key={index}
                  className="rounded-md p-3 mt-2 transition-colors hover:bg-muted/70"
                >
                  {feature.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex z-50  items-center gap-4">
          {/* <Button
            className="p-4 cursor-pointer hover:scale-101 "
            variant={"outline"}
          >
            Learn More
          </Button> */}
          <a href="https://api.whatsapp.com/send?phone=0249129891773">
          <Button className="p-4 cursor-pointer hover:scale-101 ">
            Start Growing Today
          </Button>
          </a>

          <ThemeToggle />
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden z-50 cursor-pointer">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-4 w-4 " />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="max-h-screen overflow-auto p-2">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center whitespace-nowrap text-2xl font-bold">
                  <Link href="/">
                    <span className="">
                      {/* <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" /> */}
                    </span>
                    Mona.
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/70 to-primary">
                      dev
                    </span>
                  </Link>
                </div>
              </SheetTitle>
            </SheetHeader>

            <NavigationMenu className=" items-start">
              <NavigationMenuList className="flex-col items-start justify-items-start">
                {features.map((feature, index) => (
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink
                      href={feature.href}
                      key={index}
                      className="rounded-md p-3 transition-colors hover:bg-muted/70"
                    >
                      {feature.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              {/* <Button
            className="p-4 cursor-pointer hover:scale-101 "
            variant={"outline"}
          >
            Learn More
          </Button> */}
          <a href="https://api.whatsapp.com/send?phone=0249129891773">
              <Button className="cursor-pointer hover:scale-101 ">
                Start Growing Today
              </Button>
          </a>

              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar5;
