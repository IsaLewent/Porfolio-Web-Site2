import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ServicesSummary = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#all-services",
        start: "top 40%",
        scrub: true,
      },
      defaults: {
        duration: 1,
        ease: "power1.inOut",
      },
    });

    // 3. Animasyonların hepsinin aynı anda başlaması için sonlarına '0' parametresini ekliyoruz
    tl.to("#title-services-1", { xPercent: 60 }, 0)
      .to("#title-services-2", { xPercent: -70 }, 0)
      .to("#title-services-3", { xPercent: 60 }, 0)
      .to("#title-services-4", { xPercent: -70 }, 0);
  });

  return (
    <section
      id="all-services"
      className="mt-20 overflow-hidden flex flex-col justify-center items-center font-extralight leading-snug text-center sm:mb-42 mb-36 contact-text-responsive w-full sm:pr-24"
    >
      <div id="title-services-1">
        <p className="text-bold italic">Archituctre</p>
      </div>
      <div
        id="title-services-2"
        className="flex items-center justify-center gap-3 xl:mr-4 md:mr-0 mr-6"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1.5 md:w-32 bg-gold rounded-full" />
        <p className="text-gold/90 italic">Deployment</p>
      </div>

      <div
        id="title-services-3"
        className="flex items-center justify-center sm:gap-3 gap-2 xl:pr-12 md:pl-12 pr-4"
      >
        <p className="text-gold italic">API's</p>
        <div className="w-10 h-1.5 md:w-32 bg-black rounded-full" />
        <p className=" italic">Frontends</p>
        <div className="w-10 h-1.5 md:w-32 bg-black rounded-full" />
        <p className="text-gold italic">Scalability</p>
      </div>
      <div id="title-services-4" className="">
        <p className="text-bold italic">Database</p>
      </div>
    </section>
  );
};

export default ServicesSummary;
