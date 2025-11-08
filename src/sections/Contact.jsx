import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { socials } from "../constants";
import Marquee from "../components/Marquee";

const Contact = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const text = `Got a questions, how or project Idea ?
  we'd love to hear from 
  you and discuss further!`;
  const items = [
    "Just imagin , I code",
    "Just imagin , I code",
    "Just imagin , I code",
    "Just imagin , I code",
    "Just imagin , I code",
    "Just imagin , I code",
  ];

  const lines = text.split("\n").filter((line) => line.trim() !== ""); // ! Aşağıya alıyor.
  useGSAP(() => {
    //! Header kısmı
    const tL = gsap.timeline({
      delay: 0.3,
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
        duration: 1,
        x: 350,
        ease: "power1.inOut",
        opacity: 0,
      },
      "<+0.2"
    );
    // ! Fontların yüklenmesini bekle
    document.fonts.ready.then(() => {
      // ! Animate Text Kısmı
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
          end: "bottom center",
          once: true,
        },
      });

      tl.to(msgSplit.words, {
        yPercent: 0,
        delay: 0.5,
        opacity: 1,
        ease: "circ.out",
        duration: 0.6,
        stagger: {
          each: 0.04,
          from: "start",
        },
      });
    });

    // ! Social media kısmı
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      ease: "back.inOut",
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".social-link",
        start: "top 70%",
      },
    });
  }, []); // Sadece bir kez çalış

  return (
    <>
      <section
        id="Contact"
        className="flex flex-col justify-between  bg-black min-h-screen "
      >
        <div className="First-Section">
          <div ref={contextRef}>
            <div
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              <div
                ref={headerRef}
                className={
                  "flex flex-col justify-center text-center gap-12 pt-16 sm:gap-12 text-balance"
                }
              >
                <p
                  className={`text-sm font-light tracking-[0.5rem] uppercase text-balance px-10 text-white`}
                >
                  You Dream it , I Code it
                </p>
                <div className="px-10 mb-15">
                  <h1
                    className={`flex flex-col flex-wrap gap-12  text-white uppercase banner-text-responsive sm:gap-16 md:block`}
                  >
                    Contact
                  </h1>
                </div>
              </div>
            </div>
            <div className={`relative  border-t-2  text-white`} />
          </div>

          <div className="absolute px-1 0inset-x-2 sm:inset-x-0 text-white">
            <div
              className={
                "py-12 sm:py-14  text-balance flex-wrap overflow-hidden font-light uppercase value-text-responsive text-center "
              }
            >
              <div ref={containerRef} className={`message-content `}>
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

        <div className="flex flex-col mt-70 sm:mt-60 font-light text-white uppercase lg:tet-[32px] text-[26px] leading-none mb-10 Second-Section">
          <div className="flex flex-col w-full gap-10 px-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-widest lowercase md:text-2xl lg:text-3xl">
                isalevent1242@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                +905332953823
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-4 md:gap-10">
                {" "}
                {socials.map((social, index) => (
                  <a
                    target="_blank"
                    key={index}
                    href={social.href}
                    className="text-sm leading-loose tracking-widest uppercase md:text-sm hover:text-white/30 transition-all duration-200 "
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Marquee items={items} className={`bg-black text-white mt-8`} />
        </div>
      </section>
    </>
  );
};

export default Contact;
