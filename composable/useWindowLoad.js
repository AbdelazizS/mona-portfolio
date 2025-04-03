import { useState, useEffect } from "react";

export default function usePageReady(delay = 1000) {
  const [isReady, setIsReady] = useState(false);
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsWindowLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isWindowLoaded) {
        setIsReady(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isWindowLoaded]);

  return isReady;
}
