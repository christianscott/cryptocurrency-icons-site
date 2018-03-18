import React from "react";

export default function Icon({ src }) {
  const coinName = src.replace(/\.svg$/, "");
  const fullPath = `/icons/${src}`;
  return (
    <a href={fullPath} download>
      {coinName}
      <img src={fullPath} alt={coinName} />
    </a>
  );
}
