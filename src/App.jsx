import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import ServicesSummary from "./sections/ServicesSummary";
import Services from "./sections/Services";
import Works from "./sections/Works";
import { useGSAP } from "@gsap/react";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollSmoother);

const App = () => {
  const { progress } = useProgress();

  const [isReady, setIsRead] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsRead(true);
    }
  }, [progress]);

  console.log(progress);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
      smoothTouch: 0.1,
    });
  });
  return (
    <>
      {!isReady && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          {/* Arka plan çubuğu (typo düzeltildi) */}
          <div className="relative h-1 overflow-hidden rounded-2xl w-60 bg-white/20">
            {/* Dol dolan çubuk (bu satırı doğru eklemişsiniz) */}
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div
        className={`${
          isReady ? "opacity-100 " : "opacity-0 "
        } transition-opacity duration-100`}
      >
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Hero id="Home" />
            <ServicesSummary />
            <Services />
            <Works />
            <ContactSummary />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
