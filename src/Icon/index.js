import React from "react";
import Flipper from "../Flipper";
import FixedAspectRatio from "../FixedAspectRatio";
import "./Icon.css";

export default function Icon({ src }) {
  const coinName = src.replace(/\.svg$/, "");
  const fullPath = `/icons/${src}`;
  return (
    <div className="Icon fake-link">
      <FixedAspectRatio className="Icon__content">
        <Flipper
          renderFront={() => (
            <div className="Icon__image">
              <img src={fullPath} alt={coinName} />
            </div>
          )}
          renderBack={renderBack}
        />
      </FixedAspectRatio>

      <span>
        FullCoinName
        <span className="color-light">{` ${coinName.toUpperCase()}`}</span>
      </span>
    </div>
  );
}

function renderBack() {
  return (
    <div
      style={{
        borderRadius: "100%",
        border: "thin solid #eee",
        height: "100%",
        width: "100%"
      }}
    />
  );
}
