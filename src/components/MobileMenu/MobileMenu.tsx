import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import BurgerIcon from "/images/Burger.svg";
import SearchIcon from "/images/Search.svg";
import BurgerMenu from "./BurgerMenu";
import Logotype from "/images/Logotype.svg";
import Popup from "@/components/Popup/Popup";
import Input from "@/components/Input/Input";
import "./style.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <div className="menu-container">
        <ReactSVG src={BurgerIcon} onClick={() => setIsOpen((prev) => !prev)} />
        <ReactSVG src={Logotype} />
        <ReactSVG
          src={SearchIcon}
          onClick={() => setIsOpenSearch((prev) => !prev)}
        />
      </div>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Popup isOpen={isOpenSearch} onClose={() => setIsOpenSearch(false)}>
        <Input isOpen={true} />
      </Popup>
    </>
  );
};

export default MobileMenu;
