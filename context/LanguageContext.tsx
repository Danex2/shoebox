import { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";

interface LanguageContextOptions {
  language?: string;
  setLanguage: (lang: "en" | "fr" | "de" | "cn" | "sp" | "ko") => void;
}

const LanguageContext = createContext<LanguageContextOptions | undefined>(
  undefined
);

function LanguageProvider({ children }) {
  const router = useRouter();
  const { locale } = router;

  const [language, setLanguage] = useState<string>(locale);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export { LanguageProvider, useLanguage };
