import { createContext, useState } from "react";
/* eslint-disable react-refresh/only-export-components */

// 1. Context'i oluşturuyoruz (Bileşenlerin abone olacağı merkez)
export const LoadingContext = createContext();

// 2. Provider bileşenini oluşturuyoruz (Sarmalayıcı)
export const LoadingProvider = ({ children }) => {
  // Yükleme durumunu tutacak state (Başlangıçta false, çünkü henüz yüklenmedi)
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
