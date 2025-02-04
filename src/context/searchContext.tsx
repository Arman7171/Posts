import React, { createContext, useContext, useState, ReactNode } from "react";

interface InputContextType {
  text: string;
  updateText: (newText: string) => void;
}

const SearchPostContext = createContext<InputContextType | undefined>(
  undefined
);

export const SearchPostProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string>("");

  const updateText = (newText: string) => {
    setText(newText);
  };

  return (
    <SearchPostContext.Provider value={{ text, updateText }}>
      {children}
    </SearchPostContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchPostContext);
  if (!context) {
    throw new Error("provider error");
  }
  return context;
};
