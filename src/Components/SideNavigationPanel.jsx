import React from "react";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import IconColumn from "./ColumnDataContainer";
import Text from "./Text";
import UniFilm from '@iconscout/react-unicons/icons/uil-film';
import Comment from '@iconscout/react-unicons/icons/uil-6-plus';
import Thing2 from '@iconscout/react-unicons/icons/uil-apple';
import Thing4 from '@iconscout/react-unicons/icons/uil-bookmark-full'
import Thing5 from '@iconscout/react-unicons/icons/uil-notebooks'
import IconContainer from "./FlexOne";
import TextContainer from "./FlexOne";
import NavLinkContainer from "./FlexOne";
import { showNav } from "../state/";
import { Link } from "react-router-dom";


export default () => {
  const [open, setOpen] = useRecoilState(showNav);
  console.log(" SIDE NAV MOUNTED", open)
  return (

    <div className={`navBar ${open ? 'show' : ''}`}>
      <IconColumn style={{ backgroundColor: '#e6e6e6' }}>

        <NavLinkContainer onClick={() => { setOpen(false)}} style={{ flexDirection: "column", margin: "2px", padding: "1px" }}>
          <Link to={`/`}>
            <IconContainer>
              <UniFilm />
            </IconContainer>
            <TextContainer>
              <Text as={"div"}>Video </Text>
            </TextContainer>
          </Link>
        </NavLinkContainer>
  {/*
        <NavLinkContainer onClick={() => { setOpen(false) }} style={{ flexDirection: "column", margin: "2px", padding: "1px" }}>
          <Link to={`/texts`}>
            <IconContainer>
              <Comment />
            </IconContainer>
            <TextContainer>
              <Text as={"div"}>Texts </Text>
            </TextContainer>
          </Link>
        </NavLinkContainer >

        <NavLinkContainer onClick={() => { setOpen(false) }} style={{ flexDirection: "column", margin: "2px", padding: "1px" }}>
          <Link to={`/blog`}>
            <IconContainer>
              <Thing2 />
            </IconContainer>
            <TextContainer>
              <Text as={"div"}>Blog </Text>
            </TextContainer>
          </Link>
        </NavLinkContainer>

        <NavLinkContainer onClick={() => {  setOpen(false)}} style={{ flexDirection: "column", margin: "2px", padding: "1px" }}>
          <Link to={`/junkdrawer`}>
            <IconContainer>
              <Thing4 />
            </IconContainer>
            <TextContainer>
              <Text as={"div"}>Junk Drawer </Text>
            </TextContainer>
          </Link>
        </NavLinkContainer>

        <NavLinkContainer onClick={() => {  setOpen(false)}} style={{ flexDirection: "column", margin: "2px", padding: "1px" }}>
          <Link to={`/store`}>
            <IconContainer>
              <Thing5 />
            </IconContainer>
            <TextContainer>
              <Text as={"div"}>Store </Text>
            </TextContainer>
          </Link>
        </NavLinkContainer>
  */}
        <NavLinkContainer onClick={() => {  setOpen(false)}} style={{ flexDirection: "column", margin: "2px", padding: "1px" }}>
          <Link to={`/ocr`}>
            <IconContainer>
              <UniFilm />
            </IconContainer>
            <TextContainer>
              <Text as={"div"}>Tools </Text>
            </TextContainer>
          </Link>
        </NavLinkContainer>

      </IconColumn>
    </div>
  
  )
}