import { createContext, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollToSection, setScrollToSection] = useState(null);

  return <ScrollContext.Provider value={{ scrollToSection, setScrollToSection }}>{children}</ScrollContext.Provider>;
};
