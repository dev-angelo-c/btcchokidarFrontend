import React from "react";

export const Hamburger = ({thick=12, height=20, width=20}) => {


  return(
    <svg viewBox="0 0 100 80" width={width} height={height}>
      <rect width="100" height={thick}></rect>
      <rect y="30" width="100" height={thick}></rect>
      <rect y="60" width="100" height={thick}></rect>
    </svg>
  )
}