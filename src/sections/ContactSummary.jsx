import { useContext, useRef } from "react";
import Marquee from "../components/Marquee";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LoadingContext } from "../components/LoadingContext";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);
  const paragraphRef = useRef([null]);
  const items = [
    "Inovation",
    "Precision",
    "Trust",
    "Creativity",
    "Excellence",
    "Collaboration",
  ];

  const items2 = [
    "Passion",
    "Dedication",
    "Expertise",
    "Quality",
    "Integrity",
    "Vision",
    "Commitment",
  ];

  const { isLoaded } = useContext(LoadingContext);

  useGSAP(
    () => {
      if (!isLoaded) return;

      let split;

      document.fonts.ready.then(() => {
        gsap.to(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: "+=800",
            pin: true,
            pinSpacing: true,
          },
        });

        // SplitText Metin Parçalama
        split = new SplitText(paragraphRef.current, { type: "words" });

        gsap.from(split.words, {
          y: 100,
          opacity: 0,
          rotate: 5,
          duration: 0.5,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top center",
            end: "bottom center",
          },
        });

        ScrollTrigger.refresh();
      });

      return () => {
        if (split) {
          split.revert();
        }
      };
    },
    {
      dependencies: [isLoaded], // isLoaded true olduğunda bu kod bloğu çalışacak
      scope: containerRef, // Sadece bu bileşen içindeki elementleri hedef al
    },
  );

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen gap-30 md:gap-y-20 mt-40"
    >
      <Marquee items={items} reverse={false} />

      <div
        ref={paragraphRef}
        className="overflow-hidden flex flex-col justify-center font-extralight text-center  contact-text-responsive "
      >
        <p>
          " Let's build a <br />
          <span className="font-bold italic">memorable</span> &{" "}
          <span className="font-bold italic"> inspiring </span>
          <br />
          <span>web application</span>{" "}
          <span className="text-gold">together "</span>
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        icon="material-symbols-light:square"
        className="text-black bg-transparent border-y-2"
        iconClassname="stroke-gold stroke-2 text-primary"
      />
    </section>
  );
};

export default ContactSummary;
