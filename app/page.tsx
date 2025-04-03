"use client";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Process from "@/components/Process";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";
import Feedbacks from "@/components/feedbacks";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Using useGSAP to run animation on mount

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <NavBar />
          <Hero />
          <Logos />
          <Process />
          <About />
          <Projects />
          <Cta />
          <Feedbacks />
          <Footer />
        </>
      )}
    </>
  );
}
