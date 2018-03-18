import React from "react";
import icons from "./icons.json";
import Icon from "./Icon";
import "./App.css";

export default () => (
  <div>{icons.map(iconPath => <Icon src={iconPath} key={iconPath} />)}</div>
);
