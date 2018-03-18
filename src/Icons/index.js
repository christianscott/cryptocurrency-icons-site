import React from 'react'
import Icon from "../Icon";
import "./Icons.css";

export default function Icons({ icons }) {
  return <div className="Icons">{icons.map(src => <Icon src={src} key={src} />)}</div>;
}
