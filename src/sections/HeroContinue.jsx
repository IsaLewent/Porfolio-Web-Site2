import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 1. ScrollTrigger'ı import et
import { useRef } from "react";
import "/src/HeroContinue.css";

// 2. Plugin'i kaydet
gsap.registerPlugin(ScrollTrigger);

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 500, default: 100 },
  title: { min: 300, max: 900, default: 300 },
};

const renderText = (text, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className="char" // Seçimi kolaylaştırmak için sınıf ekledim
      style={{
        fontVariationSettings: `'wght' ${baseWeight}`,
        display: "inline-block",
        willChange: "transform, opacity, font-variation-settings", // Performans ayarı
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

// --- HOVER (BÜYÜTEÇ) MANTIĞI (Aynı kaldı) ---
const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      overwrite: "auto", // Çakışmaları önler
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 50000);
      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base, 0.5);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

// --- YENİ: GİRİŞ ANİMASYONU (ScrollTrigger) ---
const animateEntrance = (container) => {
  if (!container) return;

  // Kapsayıcının içindeki harfleri bul
  const chars = container.querySelectorAll("span");

  gsap.from(chars, {
    y: 100, // 100px aşağıdan başla
    opacity: 0, // Görünmez başla
    duration: 1, // 1 saniye sürsün
    stagger: {
      each: 0.03,
      amount: 0.4,
      from: "random", // Görünümden başlayarak sırayla
    }, // Harfler arası 0.03sn gecikme (Sırayla gelme efekti)
    ease: "power4.out", // Yumuşak bir çıkış
    scrollTrigger: {
      trigger: container, // Tetikleyici eleman (h1 veya p)
      start: "top center", // Elemanın tepesi ekranın ortasına gelince başla
      // markers: true, // Ayar yaparken görmek için açabilirsin
    },
  });
};

const HeroContinue = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    // 1. Hover Efektlerini Kur
    const cleanupTitle = setupTextHover(titleRef.current, "title");
    const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

    // 2. Giriş (Scroll) Animasyonlarını Başlat
    animateEntrance(titleRef.current);
    animateEntrance(subtitleRef.current);

    return () => {
      cleanupTitle && cleanupTitle();
      cleanupSubtitle && cleanupSubtitle();
    };
  }, []);

  return (
    <div className="min-h-screen md:block hidden">
      <section className="flex flex-col items-center justify-center min-h-screen font-georama">
        {/* overflow-hidden ekledik ki yazı aşağıdan gelirken taşmasın */}
        <p
          ref={subtitleRef}
          className="md:text-[4rem] text-black mb-10 cursor-default overflow-hidden"
        >
          {renderText("Hi , I'm Isa welcome to my ", 100)}
        </p>

        <h1
          ref={titleRef}
          className="md:text-[20rem] text-4xl text-black cursor-default overflow-hidden leading-none" // leading-none satır aralığını düzeltir
        >
          {renderText("portfolio", 400)}
        </h1>
      </section>
    </div>
  );
};

export default HeroContinue;
