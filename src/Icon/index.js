import React from "react";
import "./Icon.css";

export default function Icon({ src }) {
  const coinName = src.replace(/\.svg$/, "");
  const fullPath = `/icons/${src}`;
  return (
    <a href={fullPath} className="a-reset Icon" download>
      <div className="Icon__image">
        <img src={fullPath} alt={coinName}  />
      </div>

      <span>
        FullCoinName
        <span className="color-light">{` ${coinName.toUpperCase()}`}</span>
      </span>
    </a>
  );
}
