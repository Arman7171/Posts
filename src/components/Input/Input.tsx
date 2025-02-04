import React, { useState } from "react";
import { useSearchContext } from "@/context/searchContext";
import { ReactSVG } from "react-svg";
import SearchIcon from "/images/Search.svg";
import "./styles.css";

interface PropsTypes {
  isOpen?: boolean;
}

const Input: React.FC<PropsTypes> = ({ isOpen }) => {
  const { text, updateText } = useSearchContext();
  const [isOpenSearchInput, setIsOpenSearchInput] = useState(false);

  return (
    <div className={`input-container ${isOpen ? "full-width" : ""}`}>
      <input
        value={text}
        onChange={(e) => updateText(e.target.value)}
        className={`${isOpenSearchInput || isOpen ? "open" : ""} input`}
      />
      <ReactSVG
        src={SearchIcon}
        className="input-search-icon"
        onClick={() => setIsOpenSearchInput((prev) => !prev)}
      />
    </div>
  );
};

export default Input;
