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
    : `I build secure, high performance \n full-stack webs with smoothUX \n to drive growth not headacahes`;

  const servicesRefs = useRef([]);
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
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
      "<+0.2",
    );

    // ! Fontların Yüklenmesini Bekle ve Header Metin Animasyonu
    document.fonts.ready.then(() => {
      const msgSplit = new SplitText(
        containerRef.current.querySelectorAll(".first-message"),
        {
          type: "lines, words",
          linesClass: "split-line",
        },
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

      // ! Yetenekler (Services) Kısmı
      servicesRefs.current.forEach((el) => {
        if (!el) return;

        const q = gsap.utils.selector(el);

        // Metinleri Parçalama (Senin İstediğin Özelliklerde)
        const titleSplit = new SplitText(q(".services-title"), {
          type: "chars",
        });
        const descSplit = new SplitText(q(".services-description"), {
          type: "words",
        });
        const numSplit = new SplitText(q(".services-number"), {
          type: "chars",
        });
        const numTitleSplit = new SplitText(q(".services-number-title"), {
          type: "chars",
        });

        const border = q(".services-border");

        // HATA ÇÖZÜMÜ BURADA: Timeline başlamadan önce her şeyi anında gizle!
        gsap.set(
          [
            titleSplit.chars,
            descSplit.words,
            numSplit.chars,
            numTitleSplit.chars,
          ],
          {
            opacity: 0,
          },
        );
        const tlServices = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            once: true,
          },
        });

        // 1. Önce Kapsayıcının Kendi Efekti (clipPath)
        tlServices.fromTo(
          border,
          { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.2",
        );

        // 2. Title: Aşağıdan Yukarı, Harf Harf
        tlServices
          .fromTo(
            titleSplit.chars,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.02,
              ease: "back.out(1.5)",
            },
            "-=0.4", // clipPath bitmeden 0.4 sn önce girer
          )

          // 3. Description: Aşağıdan Yukarı, Kelime Kelime
          .fromTo(
            descSplit.words,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.01,
              ease: "power2.out",
            },
            "-=0.4", // Başlık bitmeden girer
          )

          // 4. Number (01, 02): Soldan Sağa, Harf Harf
          .fromTo(
            numSplit.chars,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.03,
              ease: "power3.out",
            },
            "-=0.4",
          )

          // 5. Number Title (Liste Başlığı): Sağdan Sola, Harf Harf
          .fromTo(
            numTitleSplit.chars,
            { x: 30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.01,
              ease: "power3.out",
            },
            "-=0.4", // Numaralarla tamamen aynı anda senkron başlar
          );
      });
    });
  }, []); // Scope bağımlılıkları useGSAP ile otomatik yönetilir

  return (
    <section
      id="Services"
      className="min-h-screen bg-black rounded-t-lg md:rounded-t-4xl z-50"
    >
      <div className="sm:mb-52 mb-36 ">
        <div>
          <div ref={contextRef}>
            <div
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              <div
                ref={headerRef}
                className="flex flex-col justify-center items-start gap-12 pt-16 sm:gap-16"
              >
                <p className="sm:text-sm text-xs font-light tracking-[0.5rem] uppercase text-balance px-12 text-white ">
                  {isMobile
                    ? "behind the scene i beyond the screen"
                    : "Behind the scene , i beyond the screen"}
                </p>
                <div className="px-12 mb-15">
                  <h1 className="flex flex-col flex-wrap gap-12 text-white uppercase banner-text-responsive sm:gap-16 md:block">
                    Service
                  </h1>
                </div>
              </div>
            </div>
            <div className="relative px-10 border-t-2 text-white border-white" />
          </div>

          <div className="text-white absolute inset-x-2 sm:inset-x-0">
            <div className="py-14 sm:py-14 text-balance flex-wrap overflow-hidden font-light uppercase value-text-responsive text-start">
              <div ref={containerRef} className="sm:text-2xl text-lg px-12">
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
          id={`serviceSection-${index}`} // HATA ÖNLEYİCİ: ID'ler benzersiz olmalı, index ekledim.
          className="pt-6 pb-12 text-white bg-black "
        >
          <div
            className="services-border border-t-2 border-white mb-12 w-full"
            style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
          />
          <div className="flex items-center justify-between px-12 gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="services-title text-2xl sm:text-4xl opacity-100">
                {service.title}
              </h2>
              <p className="services-description sm:text-xl text-sm leading-relaxed tracking-widest lg:text-xl text-white/70 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 sm:gap-4 text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="services-number sm:mr-12 mr-6 pt-2 sm:text-2xl text-lg -text-white/30">
                        0{itemIndex + 1}
                      </span>
                      <p className="services-number-title sm:text-2xl text-lg mt-2 ">
                        {item.title}
                      </p>
                    </h3>
                    {/* {itemIndex < service.items.length - 1 && (
                      <div className="mt-2 w-full bg-white/30 h-[1px]" />
                    )} */}
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
