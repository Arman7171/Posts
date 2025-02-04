import React, { useState, useEffect } from "react";
import { menuItems } from "@/types/constants";
import { ReactSVG } from "react-svg";
import Logotype from "/images/Logotype.svg";
import MenuItem from "./MenuItem";
import Input from "@/components/Input/Input";
import "./styles.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky-menu ${scrolled ? "scrolled" : ""}`}>
      <section className="header-container">
        <div className="top-section">
          <ReactSVG src={Logotype} />
          <div className="search-input">
            <Input />
          </div>
        </div>
      </section>
      <nav>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              itemName={item.name}
              href={item.href}
              subItems={item.subItems}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
