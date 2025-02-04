import React, { useState, useEffect } from "react";
import ArrowIcon from "/images/Arrow.svg";
import { ReactSVG } from "react-svg";

interface SubItem {
  name: string;
  href: string;
}

interface PropsType {
  itemName: string;
  href: string;
  subItems: SubItem[];
}

const MenuItem: React.FC<PropsType> = ({ itemName, href, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSubMenu = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <li className="menu-item" onClick={toggleSubMenu}>
      <a href={href} className="menu-link">
        <div>{itemName}</div>
        {subItems.length > 0 && (
          <ReactSVG
            src={ArrowIcon}
            className={`arrow-icon ${isOpen ? "rotate" : ""}`}
          />
        )}
      </a>
      {subItems.length > 0 && (
        <div
          className={`submenu-container ${
            isMobile ? (isOpen ? "open" : "") : ""
          }`}>
          <ul className="submenu">
            {subItems.map((subItem, index) => (
              <li key={index} className="submenu-item">
                <a href={subItem.href}>{subItem.name}</a>
                <ReactSVG src={ArrowIcon} className="sub-arrow-icon" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
