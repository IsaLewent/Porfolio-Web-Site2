import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

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

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        pin: true,
        pinSpacing: true,
      },
    });

    // ! Fontların Yüklenmesini Bekle
    document.fonts.ready.then(() => {
      const split = new SplitText(paragraphRef.current, {
        type: "words",
      });
      gsap.from(split.words, {
        y: 100,
        opacity: 0,
        rotate: 5,
        duration: 0.5,
        stagger: 0.09, // ! Her kelime arası gecikme süresi
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top center",
          end: "bottom center",
        },
      });
      return () => {
        split.revert(); // ! Component bağlantısı kesilince temizle
      };
    });
  }, []); // ! Bir kere çalış

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
