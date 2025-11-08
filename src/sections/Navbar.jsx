import { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef();
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const toplineRef = useRef(null);
  const bottomlineref = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsopen] = useState(false);
  const iconTl = useRef(null);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, {
      xPercent: 100,
    });
    gsap.set(linksRef.current, {
      opacity: 0,
      xPercent: -20,
    });

    gsap.set(contactRef.current, {
      opacity: 0,
      xPercent: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          opacity: 1,
          xPercent: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          opacity: 1,
          xPercent: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(toplineRef.current, {
        rotate: -45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inout",
      })
      .to(
        bottomlineref.current,
        {
          rotate: 45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsopen(!isOpen);
  };
  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 bg-black uppercase text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-4 md:text-6xl lg:text-8xl">
          {["Home", "Services", "Work", "Contact"].map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                to={`${section}`}
                smooth
                offset={0}
                duration={1300}
                className="transition-all duration-300 cursor-pointer hover:text-white"
              >
                {section}
              </Link>
            </div>
          ))}
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row "
        >
          <div className="font-light ">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl md:text-2xl lowercase text-white tracking-widest cursor-pointer mt-2">
              isalevent1242@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-nowrap  md:flex-row gap-x-2 gap-y-2 mt-2 ">
              {socials.map((social, index) => (
                <a
                  target="_blank"
                  href={social.href}
                  key={index}
                  className="cursor-pointer hover:text-white text-sm md:text-2xl uppercase tracking-widest transition-colors duration-200
              "
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 w-14 h-14 bg-black rounded-full cursor-pointer md:w-20 md:h-20 top-4 right-10 "
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={toplineRef}
          className="h-0.5 w-10 md:w-12 bg-white rounded-full"
        ></span>
        <span
          ref={bottomlineref}
          className="h-0.5 w-10 md:w-12 bg-white rounded-full"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
