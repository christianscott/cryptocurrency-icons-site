import React from "react";
import "./FixedAspectRatio.css";

export default ({
  width = "100%",
  children,
  styles = {},
  className = ""
}) => (
  <div
    className="FixedAspectRatio"
    style={styles}
  >
    <div className={"FixedAspectRatio__child " + className}>
      {children}
    </div>
  </div>
);
