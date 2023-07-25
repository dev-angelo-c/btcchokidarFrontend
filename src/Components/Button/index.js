import React, { useState } from 'react';
import FlexColumn from "../ColumnDataContainer";
import Text from "../Text";
import Image from "../Image";

export default (props) => {

  const [clicked, setClicked] = useState(false);
  console.log("Props text? ", props.children);
  return(
    <button className={clicked ? 'buttonClicked' : 'buttonUnClicked'} onClick={() => setClicked(!clicked)} >
      {props.children}
    </button>
  )
}