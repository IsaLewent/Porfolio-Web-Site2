import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ServicesSummary = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to("#title-services-1", {
      xPercent: 30,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#all-services",
        start: "top 40%",
        scrub: true,
      },
    });
    tl.to("#title-services-2", {
      xPercent: -70,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#all-services",
        start: "top 40%",
        scrub: true,
      },
    });
    tl.to("#title-services-3", {
      xPercent: 50,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#all-services",
        start: "top 40%",
        scrub: true,
      },
    });
    tl.to("#title-services-4", {
      xPercent: -60,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#all-services",
        start: "top 40%",
        scrub: true,
      },
    });
  });

  return (
    <section
      id="all-services"
      className="mt-20 overflow-hidden font-extralight leading-snug text-center mb-42 contact-text-responsive"
    >
      <div id="title-services-1">
        <p className="text-bold italic">Archituctre</p>
      </div>
      <div
        id="title-services-2"
        className="flex items-center justify-center gap-3 translate-x-10 md:translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1.5 md:w-32 bg-gold rounded-full" />
        <p className="text-gold/90 italic">Deployment</p>
      </div>

      <div
        id="title-services-3"
        className="flex items-center justify-center gap-3 translate-x-2 md:translate-x-48"
      >
        <p className="text-gold italic">API's</p>
        <div className="w-10 h-1.5 md:w-32 bg-black rounded-full" />
        <p className=" italic">Frontends</p>
        <div className="w-10 h-1.5 md:w-32 bg-black rounded-full" />
        <p className="text-gold italic">Scalability</p>
      </div>
      <div id="title-services-4" className="md:translate-x-48 translate-x-10">
        <p className="text-bold italic">Database</p>
      </div>
    </section>
  );
};

export default ServicesSummary;
