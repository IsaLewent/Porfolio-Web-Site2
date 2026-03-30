import { projects } from "../constants";
import { Icon } from "@iconify/react";
import { useState } from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Works = () => {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  const text = isMobile
    ? "Projects built with passion for meaningful impact"
    : `Featured projects that have been 
  meticulously crafted with passion 
  to drive results and impact`;

  const overlaysRef = useRef([null]);
  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);
  const [currentIndex, setcurrentIndex] = useState(null);
  const previewRef = useRef(null);
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const lines = text.split("\n").filter((line) => line.trim() !== ""); // ! Aşağıya alıyor.

  useGSAP(() => {
    gsap.set(previewRef.current, { xPercent: -50, yPercent: -50 });

    //!Floating image animation kısmı
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });

    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.3,
      stagger: 0.2,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
        start: "top 60%",
      },
    });

    // ! Header Kısmı
    const tl = gsap.timeline({
      delay: 1.5,
      scrollTrigger: {
        trigger: contextRef.current,
        start: "top center",
      },
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
      "<+0.2",
    );
    // ! Fontların Yüklenmesini Bekle
    document.fonts.ready.then(() => {
      //! Animate text kısmı
      const msgSplit = new SplitText(
        containerRef.current.querySelectorAll(".first-message"),
        {
          type: "lines, words",
          linesClass: "split-line",
        },
      );

      gsap.set(msgSplit.words, {
        yPercent: 100,
        opacity: 0,
      });

      const tL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tL.to(msgSplit.words, {
        yPercent: 0,
        delay: 0.4,
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

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setcurrentIndex(index);

    const el = overlaysRef.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        ease: "power2.out",
        duration: 0.15,
      },
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setcurrentIndex(null);

    const el = overlaysRef.current[index];
    if (!el) return;

    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      ease: "power2.out",
      duration: 0.15,
    });

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    mouse.current.x = e.clientX - 3;
    mouse.current.y = e.clientY - 40;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section
      id="Work"
      className="flex flex-col sm:gap-70 gap-0 min-h-[80vh] sm:mt-10 mt-0"
    >
      <div>
        <div ref={contextRef}>
          <div className="px-12">
            <div
              ref={headerRef}
              className={
                "flex flex-col sm:justify-start sm:items-start justify-center items-start gap-12 pt-16 sm:gap-16"
              }
            >
              <p
                className={
                  "font-light uppercase sm:text-balance sm:text-2xl text-[16px] text-black"
                }
              >
                Logic meets Aesthetics, Seamlessly
              </p>
              <div className="mb-15">
                <h1
                  className={`flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block`}
                >
                  Works
                </h1>
              </div>
            </div>
          </div>
          <div className={`text-black border-t-2 `} />
        </div>

        <div className="absolute px-12 inset-x-2 sm:inset-x-0 sm:mt-8 mt-0">
          <div
            className={
              "py-12 sm:py-14 text-balance overflow-hidden font-light uppercase value-text-responsive text-start "
            }
          >
            <div
              ref={containerRef}
              className={`message-content flex flex-col justify-start items-start `}
            >
              {lines.map((line, index) => (
                <span
                  key={index}
                  className="block text-lg  sm:text-2xl first-message "
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative flex flex-col gap-12 font-extralight mt-40 md:mt-0"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            key={project.id}
            id="project"
            className="relative flex flex-col  py-4 cursor-pointer group md:gap-0"
            onClick={() => {
              if (!projects[index].disabled) {
                window.open(projects[index].href, "_blank");
              }
            }}
            style={{
              cursor: index === 0 ? "not-allowed" : "pointer",
            }}
          >
            {/* Overlay */}
            <div
              ref={(el) => {
                overlaysRef.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />
            {/* {title} */}

            <div
              className="sm:text-[32px] text-[20px] leading-none flex justify-between items-center md:pr-4 md:pl-20 sm:pr-12 pr-4 pl-12 md:group-hover:text-white md:group-hover:pl-24 md:group-hover:pr-12 duration-500 transition-all 
             "
            >
              <h2>{project.name}</h2>
              <Icon
                icon="jam:arrow-square-up-right-f"
                className={`md:size- size-6 `}
              />
            </div>
            {/*  divider */}

            <div className="w-full h-0.5 bg-black/80 my-4 sm:my-0" />

            {/* framework */}
            <div className="flex sm:justify-start justify-center sm:px-20 px-4 gap-4 text-[11px] leading-loose uppercase transition-all duration-500 md:text-sm sm:gap-x-5 gap-x-2 md:group-hover:px-24">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile prewiev */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img
                src={project.image}
                alt=""
                className="object-cover w-full h-full rounded-md brightness-70"
              />
            </div>
          </div>
        ))}
        {/* dekstop floating preview image */}
        <div
          ref={previewRef}
          className="absolute -top-2/6 z-10 left-0 overflow-hidden w-[764px] rounded-2xl border-black pointer-events-none hidden md:block opacity-0 scale-0"
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt="preview"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
