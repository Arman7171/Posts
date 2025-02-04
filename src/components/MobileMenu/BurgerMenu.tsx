import React from "react";
import { ReactSVG } from "react-svg";
import { menuItems } from "@/types/constants";
import Logotype from "/images/Logotype.svg";
import CloseIcon from "/images/Close.svg";
import MenuItem from "../Header/MenuItem";

interface PropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<PropsType> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${isOpen ? "open" : ""} burger-container`}>
      <div className={`menu-bg`}></div>
      <div className="menu-content">
        <div className="menu-header">
          <ReactSVG src={Logotype} />
          <ReactSVG src={CloseIcon} onClick={() => setIsOpen(false)} />
        </div>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              itemName={item.name}
              href={item.href}
              subItems={item.subItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
