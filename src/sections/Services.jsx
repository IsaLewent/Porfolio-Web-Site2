import { useRef } from "react";
import { servicesData } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  const text = isMobile
    ? "Secure & Performant Full-Stack Web | Smooth UX "
    : `I build secure, high performance 
  full-stack webs with smoothUX 
  to drive growth not headacahes`;
  const servicesRefs = useRef([]);
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const lines = text.split("\n").filter((line) => line.trim() !== ""); // ! Aşağıya alıyor.

  useGSAP(() => {
    // !Yetenekler kısmı

    servicesRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        },
        ease: "power1.inOut",
        duration: 1,
      });
    });

    // ! Header Kısmı
    const tL = gsap.timeline({
      scrollTrigger: {
        trigger: contextRef.current,
        start: "top center",
      },
    });

    tL.from(contextRef.current, {
      x: "100vw",
      duration: 1,
      ease: "circ.inOut",
    });

    tL.from(
      headerRef.current,
      {
        delay: 0,
        duration: 1,
        x: "100vw",
        ease: "power3.inOut",
        opacity: 0,
      },
      "<+0.2"
    );
    // ! Fontların Yüklenmesini Bekle
    document.fonts.ready.then(() => {
      // ! Animate text kısmı
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
          start: "top center",
          once: true,
        },
      });

      tl.to(msgSplit.words, {
        yPercent: 0,
        delay: 0.3,
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
    <section
      id="Services"
      className="px-10 min-h-screen bg-black rounded-t-4xl z-50"
    >
      <div className="mb-64">
        <div>
          <div ref={contextRef}>
            <div
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              <div
                ref={headerRef}
                className={
                  "flex flex-col justify-center items-start gap-12 pt-16 sm:gap-16"
                }
              >
                <p
                  className={`text-sm font-light tracking-[0.5rem] uppercase text-balance px-12 text-white`}
                >
                  Behind the scene, I Beyond the screen
                </p>
                <div className="px-10 mb-15">
                  <h1
                    className={`flex flex-col flex-wrap gap-12 text-white uppercase banner-text-responsive sm:gap-16 md:block`}
                  >
                    Service
                  </h1>
                </div>
              </div>
            </div>
            <div
              className={`relative  px-10 border-t-2 text-white border-white`}
            />
          </div>

          <div className="text-white absolute inset-x-2 sm:inset-x-0 ">
            <div
              className={
                "py-12 sm:py-14 px-10  text-balance flex-wrap overflow-hidden font-light uppercase value-text-responsive text-start "
              }
            >
              <div ref={containerRef} className={`message-content px-12`}>
                {lines.map((line, index) => (
                  <span
                    key={index}
                    className="block leading-relaxed tracking-wide first-message "
                  >
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {servicesData.map((service, index) => (
        <div
          ref={(el) => (servicesRefs.current[index] = el)}
          key={index}
          id="serviceSection"
          className="pt-6 pb-12 px-12 text-white bg-black border-t-2 border-white/30 "
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-lg leading-relaxed tracking-widest lg-text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg -text-white/30">
                        0 {itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className=" mt-2 w-full  bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Services;
