import React from "react";
import FlexOne from "./FlexOne";
import FlexThree from "./FlexThree";
import Text from "./Text";
import { Hamburger } from "../Icons";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {showNav} from "../state"

export default () => {

  const [open, setOpen] = useRecoilState(showNav);
  return (
    <>
      <div style={{ display: "flex", justifyContent:"center", alignItems: "center" }} >
        <FlexOne onClick = { () => setOpen(!open) }>
          <Hamburger
            style={{
              padding: '1px',
              border: '1px solid black',
              borderRadius: '13%',
              boxShadow: '2px 2px 3px grey',
              width: '50%',
              height: '20px',
              margin: '10px'
            }} 
          />
        </FlexOne>    
        <FlexThree>
          <h1 style={{
                fontFamily: 'DatalegreyaThin',
                fontWeight: 'normal',
                fontStyle: 'normal',

              }}
          >BTC Chokidar</h1>
        </FlexThree>
      </div>
      <div style={{ display: "flex", justifyContent:"center", alignItems: "center", marginTop: "10px", marginBottom: "15px"}} >
        <p style={{fontFamily:"DatalegreyaThin", textAlign:"center", fontSize: "1.2em"}}>
          The gods help those who help themselves
        </p>
      </div>
    </>
  )
}