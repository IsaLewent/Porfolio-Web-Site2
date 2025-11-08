import { useRef } from "react";
import AnimateText from "../components/AnimateText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subtitle,
  title,
  text,
  textColor,
  withScrollTriiger,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 2.5,
      scrollTrigger: undefined,
    });

    tl.from(contextRef.current, {
      x: "100vw",
      duration: 1,
      ease: "circ.inOut",
    });

    tl.from(
      headerRef.current,
      {
        duration: 1,
        x: 350,
        ease: "power1.inOut",
        opacity: 0,
      },
      "<+0.2"
    );
  }, []); // Sadece bir kez çalış

  return (
    <div>
      <div ref={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
          <div
            ref={headerRef}
            className={
              withScrollTriiger
                ? ""
                : "flex flex-col justify-center  gap-12 pt-16 sm:gap-16 text-balance"
            }
          >
            <p
              className={`text-sm font-light tracking-[0.5rem] uppercase text-balance px-10 ${textColor}`}
            >
              {subtitle}
            </p>
            <div className="px-10 mb-15">
              <h1
                className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase banner-text-responsive sm:gap-16 md:block`}
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
        <div className={`relative   text-black border-t-2 ${textColor}`} />
      </div>

      <div className="absolute px-1 inset-x-2 sm:inset-x-0 ">
        <div
          className={
            "py-12 sm:py-14  text-balance flex-wrap overflow-hidden font-light uppercase value-text-responsive text-center md:text-end"
          }
        >
          <AnimateText classname={"px-4"} text={text}></AnimateText>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
