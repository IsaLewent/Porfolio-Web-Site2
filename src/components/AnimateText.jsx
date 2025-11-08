import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimateText = ({ text, classname, withScrollTrigger = false }) => {
  const containerRef = useRef(null);
  const lines = text.split("\n").filter((line) => line.trim() !== ""); // ! Aşağıya alıyor.

  useGSAP(() => {
    // ! Fontlari yüklemesini bekle
    document.fonts.ready.then(() => {
      const msgSplit = new SplitText(
        containerRef.current.querySelectorAll(".first-message"),
        {
          type: "lines, words",
          linesClass: "split-line",
        }
      );

      gsap.set(msgSplit.words, { yPercent: 100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: withScrollTrigger ? "top center" : "top 90%",
          end: "bottom center",
          once: true,
        },
      });

      tl.to(msgSplit.words, {
        yPercent: 0,
        delay: withScrollTrigger ? 0.1 : 3,
        opacity: 1,
        ease: "circ.out",
        duration: 0.6,
        stagger: {
          each: 0.04,
          from: "start",
        },
      });
    });
  }, []); // Sadece bir kez çalış

  return (
    <div ref={containerRef} className={`message-content ${classname || ""}`}>
      {lines.map((line, index) => (
        <span
          key={index}
          className="block leading-relaxed tracking-wide first-message sm:text-end text-center"
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimateText;
