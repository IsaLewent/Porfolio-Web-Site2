import { useState, useEffect } from "react";

const FpsCounter = () => {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frameCount = 0; // O saniye içinde çizilen kare sayısını tutar
    let lastTime = performance.now(); // Son ölçüm zamanını tutar
    let animationFrameId;

    const measureFPS = () => {
      const now = performance.now();
      frameCount++; // Her frame çizildiğinde sayacı artır

      // Eğer son ölçümün üzerinden 1000 milisaniye (1 saniye) geçtiyse
      if (now - lastTime >= 1000) {
        setFps(frameCount); // FPS değerini state'e yaz
        frameCount = 0; // Sayacı sıfırla
        lastTime = now; // Zamanı güncelle
      }

      // Döngüyü devam ettir
      animationFrameId = requestAnimationFrame(measureFPS);
    };

    // İlk döngüyü başlat
    animationFrameId = requestAnimationFrame(measureFPS);

    // Bileşen ekrandan kalktığında (unmount) döngüyü temizle
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Renge göre uyarı vermek için ufak bir stil mantığı
  const getColor = (currentFps) => {
    if (currentFps >= 55) return "text-green-500";
    if (currentFps >= 30) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "100vh",
        right: "10px",
        background: "rgba(250, 0, 0, 0.8)",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontFamily: "monospace",
        zIndex: 9999,
        pointerEvents: "none", // Tıklamaları engellememesi için
      }}
    >
      FPS:{" "}
      <span className={getColor(fps)} style={{ fontWeight: "bold" }}>
        {fps}
      </span>
    </div>
  );
};

export default FpsCounter;
