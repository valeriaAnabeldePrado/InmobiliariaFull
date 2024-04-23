import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const LenisWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      gestureOrientation: "vertical",
      smoothTouch: true,
      autoResize: true,
    });

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
};

export default LenisWrapper;
