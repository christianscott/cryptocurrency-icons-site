import React from "react";

const fixedAspectChildStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%"
};

export default ({
  ratio = { w: 1, h: 1 },
  width = "100%",
  children,
  styles = {},
  className = ""
}) => (
  <div
    style={{
      width,
      paddingTop: `${makePadding(ratio)}%`,
      position: "relative",
      ...styles
    }}
  >
    <div className={className} style={fixedAspectChildStyle}>
      {children}
    </div>
  </div>
);

function makePadding({ w, h }) {
  return h / w * 100;
}
