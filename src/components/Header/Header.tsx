import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-body">
      <div className="menu">
        <div className="item-menu item-menu-active">Inicio</div>
        <div className="item-menu item-menu-active">Productos</div>
        <div className="item-menu item-menu-active">Quiene Somos</div>
      </div>
    </div>
  );
};
